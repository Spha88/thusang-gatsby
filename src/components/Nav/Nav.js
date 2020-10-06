import React, { useState } from 'react';
import classes from './Nav.module.scss';
import { Link } from 'gatsby';
import burger_icon from '../../assets/images/burger_icon.svg';
import close_btn from '../../assets/icons/close_btn.svg';

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);
    const toggleNav = () => setOpenNav(!openNav);
    const keyDown = (e) => {
        console.log("Key down");
    }
    return (
        <header className={classes.NavContainer}>
            <nav className={classes.Nav}>
                <div className={classes.Logo}>
                    <h2><Link to={`/`}>Thusang Social Center</Link></h2>
                    <h5><Link to={`/`}>In the service of caring</Link></h5>
                </div>

                {/** Burger Icon only visible on mobile screen */}
                <div className={classes.NavIconContainer} onClick={() => setOpenNav(!openNav)} onKeyDown={keyDown} role="button" tabIndex="0">
                    <img src={burger_icon} alt="nav icon" />
                </div>

                {/** Nav Items visible on bigger screens */}
                <ul className={classes.NavItems}>
                    <li><Link activeClassName={classes.Active} to={`/`}>Home</Link></li>
                    <li><Link activeClassName={classes.Active} to={`/about`}>About Us</Link></li>
                    <li><Link activeClassName={classes.Active} to={`/donate`}>Donate</Link></li>
                    <li><Link activeClassName={classes.Active} to={`/contact-us`}>Contact</Link></li>
                </ul>

                {/** Mobile Nav only visible on mobile screens */}
                <ul className={`${classes.NavItemsMobile} ${openNav && classes.open}`}>
                    <div onClick={toggleNav} onKeyDown={keyDown} tabIndex="0" role="button">
                        <img src={close_btn} alt="close button" />
                    </div>
                    <li className={classes.NavLogo}>
                        <Link to={`/`}><h2>Thusang Social Center</h2></Link>
                        <Link to={`/`}><h5>In the service of caring</h5></Link>
                    </li>
                    <li><Link activeClassName={classes.Active} onClick={() => setOpenNav(!openNav)} to={`/`}>Home</Link></li>
                    <li><Link activeClassName={classes.Active} onClick={() => setOpenNav(!openNav)} to={`/about`}>About Us</Link></li>
                    <li><Link activeClassName={classes.Active} onClick={() => setOpenNav(!openNav)} to={`/donate`}>Donate</Link></li>
                    <li><Link activeClassName={classes.Active} onClick={() => setOpenNav(!openNav)} to={`/contact-us`}>Contact</Link></li>
                </ul>

            </nav>
        </header>
    )
}

export default Nav
