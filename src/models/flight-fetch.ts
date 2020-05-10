export default interface FlightFetch {
    movement: {
        airport: {
            name: string;
        },
        scheduledTimeLocal: string;
        actualTimeLocal: string;
        terminal: string;
    },
    number: string;
    status: string
    airline: {
        name: string;
    }
};