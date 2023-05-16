import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar text-black font-bold bg-gradient-to-r from-gray-400 via-blue-200 to-gray-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-gray-400 font-bold bg-gray-600">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/courses'>Courses</NavLink></li>
                        <li><NavLink to='/about'>About Us</NavLink></li>
                        <li><NavLink to='/success'>Success Students</NavLink></li>
                        <li><NavLink to='/events'>Events</NavLink></li>
                        <li><NavLink to='/contact'>Contact Us</NavLink></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Digital Academy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/courses'>Courses</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/success'>Success Students</NavLink></li>
                    <li><NavLink to='/events'>Events</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-xs">Log in / Register</Link>
                <div className='me-5 hidden'>
                    <h1>Profile</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;