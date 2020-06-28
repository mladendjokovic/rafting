import React from 'react';
import useStateToggle from '../Hooks/useStateToggle';
import '../styles/Navbar.css';

function Navbar() {
    const [open, toggle] = useStateToggle(false);
    return(
        <nav className="Navbar">
            <div className="Navbar__container">
                <div className="Navbar__center">
                    <h3>LOGO</h3>
                    <div className={open? "Navbar-hamburger close" : "Navbar-hamburger"} onClick={toggle}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                    <ul className={open ? 'Navbar-links Navbar-show': 'Navbar-links'}>
                        <li><a>Home</a></li>
                        <li><a>Offers</a></li>
                        <li><a>Contact</a></li>
                    </ul>
            </div>
        </nav>
    )
}

export default Navbar;