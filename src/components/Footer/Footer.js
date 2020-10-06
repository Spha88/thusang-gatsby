import React from 'react';
import classes from './Footer.module.scss';
import { Link } from 'gatsby';

const Footer = () => {

    const date = new Date();

    return (
        <footer className={classes.Footer}>
            <div className={classes.FooterInner}>
                <div className={classes.Content}>
                    <div className={classes.Logo}>
                        <h2><Link to={`/`}>Thusang Social Center</Link></h2>
                        <h5><Link to={`/`}>In the service of caring</Link></h5>
                    </div>
                    <ul className={classes.NavItems}>
                        <li><Link to={`/`} activeClassName={classes.Active}>Home</Link></li>
                        <li><Link to={`/about`} activeClassName={classes.Active}>About Us</Link></li>
                        <li><Link to={`/donate`} activeClassName={classes.Active}>Donate</Link></li>
                        <li><Link to={`/contact-us`} activeClassName={classes.Active}>Contact</Link></li>
                    </ul>
                </div>
                <div className={classes.CopyRight}>
                    Thusang Social Center &#169; {date.getFullYear()}
                </div>
                <div className={classes.Signature}>
                    <a href="http://www.netslate.co.za">website by: <br />Spha</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
