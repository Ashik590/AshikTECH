import React from 'react';
import logo from './images/logo.svg';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    const rmShow = ()=>{
        document.querySelector(".navbar-collapse").classList.remove("show");
    }
    return (
        <>
            <header className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink to="/"><img src={logo} alt="Logo"/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mt-3 mt-lg-0 ms-auto mb-2 mb-lg-0">
                            <li onClick={rmShow} className="nav-item my-lg-0 my-1">
                                <NavLink exact activeClassName="menu_active" to="/">Home</NavLink>
                            </li>
                            <li onClick={rmShow} className="nav-item my-lg-0 my-1">
                                <NavLink exact activeClassName="menu_active" to="/service">Services</NavLink>
                            </li>
                            <li onClick={rmShow} className="nav-item my-lg-0 my-1">
                                <NavLink exact activeClassName="menu_active" to="/about">About</NavLink>
                            </li>
                            <li onClick={rmShow} className="nav-item my-lg-0 my-1">
                                <NavLink exact activeClassName="menu_active" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
