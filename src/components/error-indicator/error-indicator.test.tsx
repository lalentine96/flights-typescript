import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ErrorIndicator from './error-indicator';

afterEach(cleanup);

it('should match the snapshot', () => {
    const { asFragment } = render(<ErrorIndicator />);
    expect(asFragment()).toMatchSnapshot();
});


