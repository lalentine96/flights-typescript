import React, { useState, useEffect, ChangeEvent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import DummyService from '../../services/dummy-service';
import ScheduleModel from '../../models/schedule';
import FlightFormatted from '../../models/flight-formatted';
import { formatFlights } from '../../utils/format-flights';

import Schedule from '../schedule/schedule';
import Navbar from '../navbar/navbar';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import './app.css';

const App: React.FC = () => {
    const service = new DummyService();

    const [ flights, setFlights ] = 
        useState<ScheduleModel<FlightFormatted> | null>(null);
    const [ numberFilter, setNumberFilter ] = useState<string>('');
    const [ delayedOnly, setDelayedOnly ] = useState<boolean>(false);
    const [ error, setError ] = useState<boolean>(false);

    useEffect(() => {
        if (!flights) {
            service.getFlights()
                .then(flights => {
                    const { arrivals, departures } = flights;

                    setFlights({
                        arrivals: formatFlights(arrivals),
                        departures: formatFlights(departures)
                    });
                })
                .catch(() => {
                    setError(true);
                });
        }
    });

    const setNumberToSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setNumberFilter(e.target.value);
    };

    const toggleDelayedOnly = () => {
        setDelayedOnly(prevDelayedOnly => !prevDelayedOnly);
    };

    const filterFlights = (flights: FlightFormatted[]) => 
        flights.filter(flight => {
        return (
            flight.number.includes(numberFilter) &&
            (!delayedOnly || flight.status === 'Delayed')
        );
    });

    return (
        <>
            <div className="jumbotron bg-info app-header">
                <h1 className="text-white">
                    Sheremetyevo schedule
                </h1>
                <h2 className="text-white">
                    All flights in the next 2 hours
                </h2>
            </div>
            <Navbar
                    onSearchChange={setNumberToSearch}
                    onToggleCheckbox={toggleDelayedOnly} />
            {
                error ? <ErrorIndicator /> :
                flights ?
                <Switch>
                    <Route path="/arrivals">
                        <Schedule flights={filterFlights(flights.arrivals)}/>
                    </Route>
                    <Route path="/departures">
                        <Schedule flights={filterFlights(flights.departures)} />
                    </Route>
                    <Route render={() => <Redirect to="/arrivals" />} />
                </Switch> :
                <Spinner />
            }
        </>
    );

}

export default App;