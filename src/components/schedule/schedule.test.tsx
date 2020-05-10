import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Schedule from './schedule';

afterEach(cleanup);

it('should match the snapshot', () => {
    const flights = [
        {
            scheduledTime: "2020-04-10 19:09+03:00",
            actualTime: "2020-04-10 18:56+03:00",
            city: "Düsseldorf",
            airline: "Emirates Airlines",
            number: "AV 3146",
            terminal: "A",
            status: "Arrived",
        },
        {
            scheduledTime: "2020-04-10 19:20+03:00",
            actualTime: "2020-04-10 19:01+03:00",
            city: "Paris",
            airline: "UTAIR",
            number: "N4 8795",
            terminal: "C",
            status: "Delayed"
        }
    ]

    const { asFragment } = render(<Schedule flights={flights}/>);
    expect(asFragment()).toMatchSnapshot();
});
