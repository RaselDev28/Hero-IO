import React from 'react';
import logo from './logo.png';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from "react-router";

const Navbar = () => {
    const links = (
        <>
            <li><NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "bg-green-300 text-black" : "hover:bg-green-300"
                }
            >
                Home
            </NavLink></li>
            <li><NavLink
                to="/apps"
                className={({ isActive }) =>
                    isActive ? "bg-green-300 text-black" : "hover:bg-green-300"
                }
            >
                Apps
            </NavLink></li>
            <li><NavLink
                to="/installation"
                className={({ isActive }) =>
                    isActive ? "bg-green-300 text-black" : "hover:bg-green-300"
                }
            >
                Installation
            </NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            {/* Logo Part */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <a href="/" className="flex items-center gap-3 text-2xl font-bold text-blue-700">
                    <img className="w-10 h-10" src={logo} alt="Hero IO Logo" />
                    Hero IO
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex">
                <a
                    href='https://github.com/RaselDev28'
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-2xl bg-blue-600 py-5 text-white hover:bg-green-300 transition-colors"
                >
                    <FaGithub />
                    <p>Contribute</p>
                </a>
            </div>
        </div>
    );
};

export default Navbar;