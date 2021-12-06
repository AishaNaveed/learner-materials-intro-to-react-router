import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <h1>Fakelandia Justice Dapartment</h1>
                <nav>
                    <NavLink to='/'><h3>Home</h3> </NavLink>
                    <NavLink to='/Misdemeanour'><h3>Misdemeanours</h3> </NavLink>
                    <NavLink to='/Confession'><h3>Confess To Us</h3> </NavLink>
                </nav>
            </header>
        </>
    );
}

export default Header;