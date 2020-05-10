import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './navbar';

afterEach(cleanup);

it('should match the snapshot', () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Navbar 
                onSearchChange={() => {}}
                onToggleCheckbox={() => {}}
            />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});