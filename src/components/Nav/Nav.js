import React, { useState } from 'react';
import classes from './Nav.module.scss';
import { Link } from 'gatsby';
import burger_icon from '../../assets/images/burger_icon.svg';

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);
    const HomeKey = e => {
        console.log(e.target);
    }
    return (
        <header className={classes.NavContainer}>
            <nav className={classes.Nav}>
                <div className={classes.Logo}>
                    <h2><Link to={`/`}>Thusang Social Center</Link></h2>
                    <h5><Link to={`/`}>In the service of caring</Link></h5>
                </div>
                <div className={classes.NavIconContainer} onClick={() => setOpenNav(!openNav)} onKeyDown={() => HomeKey()}>
                    <img src={burger_icon} alt="nav icon" />
                </div>
                <ul className={classes.NavItems}>
                    <li><Link activeClassName={classes.Active} to={`/`}>Home</Link></li>
                    <li><Link activeClassName={classes.Active} to={`/about`}>About Us</Link></li>
                    <li><Link activeClassName={classes.Active} to={`/donate`}>Donate</Link></li>
                    <li><Link activeClassName={classes.Active} to={`/contact-us`}>Contact</Link></li>
                </ul>
                <ul className={`${classes.NavItemsMobile} ${openNav && classes.open}`} onClick={() => setOpenNav(!openNav)} role="closes nav">
                    <li className={classes.NavLogo}>
                        <Link to={`/`}><h2>Thusang Social Center</h2></Link>
                        <Link to={`/`}><h5>In the service of caring</h5></Link>
                    </li>
                    <li><Link activeClassName={classes.Active} to={`/`}>Home</Link></li>
                    <li><Link activeClassName={classes.Active} to={`/about`}>About Us</Link></li>
                    <li><Link activeClassName={classes.Active} to={`/donate`}>Donate</Link></li>
                    <li><Link activeClassName={classes.Active} to={`/contact-us`}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
