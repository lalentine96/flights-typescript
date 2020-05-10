import React from 'react';

import './schedule.css';

import FlightFormatted from '../../models/flight-formatted';

interface ScheduleProps {
    flights: FlightFormatted[];
}

const Flight: React.FC<FlightFormatted> = ({ 
    scheduledTime, 
    actualTime, 
    city, 
    airline, 
    number, 
    terminal, 
    status }) => {
    return (
        <tr>
            <td >
                {scheduledTime.slice(11, 16)}
                <span className="mobile">{actualTime.slice(11, 16)}</span>
            </td>
            <td className="desktop">{actualTime.slice(11, 16)}</td>
            <td >
                {city}
                <span className="mobile">{airline}</span>
                <span className="mobile">{number}</span>
            </td>
            <td className="desktop">{airline}</td>
            <td className="desktop">{number}</td>
            <td >{terminal}</td>
            <td >{status.replace(/([a-z])([A-Z])/g, '$1 $2')}</td>
        </tr>
    );
};

const Schedule: React.FC<ScheduleProps> = ({ flights }) => {
    return (
        <table className="table table-striped">
            <thead className="thead-light">
                <tr>
                    <th>
                        Scheduled time 
                        <span className="mobile">/ Actual time</span></th>
                    <th className="desktop">Actual time</th>
                    <th>
                        <span className="desktop">City</span>
                        <span className="mobile">Flight</span>
                    </th>
                    <th className="desktop">Airline</th>
                    <th className="desktop">Flight number</th>
                    <th>Terminal</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    flights.map(flight => <Flight {...flight} key={flight.number} />)
                }
            </tbody>
        </table>
    );
};

export default Schedule;