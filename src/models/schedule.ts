import FlightFetch from './flight-fetch';
import FlightFormatted from './flight-formatted';

export default interface Schedule<T extends FlightFetch | FlightFormatted> {
    arrivals: T[];
    departures: T[];
};