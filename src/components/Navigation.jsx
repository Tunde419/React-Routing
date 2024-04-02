import React from 'react';
import { Link } from 'react-router-dom';
import  Image  from './images/avatar.png';
import '../components/css/Navigation.css'
const Navigation = () => {
   
    const isLoggedIn = true;
    return (
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    {isLoggedIn ? (
                        <>
                            <li><Link to="/profile"><img src={Image} alt="User Avatar" className="avatar" /></Link></li>
                            <li><Link to="/nav">NavBar</Link></li>
                        </>
                    ) : (
                        <li><Link to="/login">Login</Link></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
