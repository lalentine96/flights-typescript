import React, { ChangeEventHandler } from 'react';

import { NavLink } from 'react-router-dom';

interface NavbarProps {
    onSearchChange: ChangeEventHandler<HTMLInputElement>,
    onToggleCheckbox: ChangeEventHandler<HTMLInputElement>
}

const Navbar: React.FC<NavbarProps> = ({ onSearchChange, onToggleCheckbox }) => {
    return (
        <div className="navbar navbar-expand-sm bg-info navbar-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/arrivals">
                        Arrivals
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/departures">
                        Departures
                    </NavLink>
                </li>
            </ul>
            <form className="form-group nav-form">
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        onChange={onToggleCheckbox} />
                    <label
                        className="form-check-label text-white mr-3 nav-label">
                        Show delayed only
                    </label>
                </div>
                <input 
                    className="form-control nav-input"
                    type="text"
                    placeholder="Search by flight number" 
                    onChange={onSearchChange} />
            </form>
        </div>
    );
};

export default Navbar;