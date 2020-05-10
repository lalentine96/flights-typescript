import ScheduleModel from '../models/schedule';
import FlightFetch from '../models/flight-fetch';

export default class RandomService {
    getFlights = async (): Promise<ScheduleModel<FlightFetch>> => {
        const resp = await fetch('/api/flights');

        if (!resp.ok) {
            throw new Error(`Could not fetch, received ${resp.status}`)
        }

        const flights = await resp.json();

        return flights;
    }
}