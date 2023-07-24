import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/UserContext';

const Header = () => {
    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)
    const menu = <><li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/courses'>Courses</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li></>

    const singout = () => {
        logout()
            .then()
            .catch(err => console.error(err))
        navigate('/')
    }
    return (
        <div className="navbar text-black font-bold bg-gradient-to-r from-gray-400 via-blue-200 to-gray-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-gray-400 font-bold bg-gray-600">
                        {menu}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Digital Academy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='me-5 flex'>
                            <h1><Link to="/profile">Profile</Link></h1> <h1 onClick={singout} className='ms-3'><Link>Log Out</Link></h1>
                        </div>
                        :
                        <Link to="/login" className="btn btn-xs">Log in / Register</Link>
                }
            </div>
        </div>
    );
};

export default Header;