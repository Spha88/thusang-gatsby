import React from 'react';
import classes from './NotFound.module.scss';
import { Link } from 'gatsby';
import not_found from '../assets/images/not_found.svg';

const NotFound = () => {
    return (
        <div className={classes.NotFound}>
            <div>
                <img src={not_found} alt="page not found" />
                <h2>Oops! Page not found</h2>
                <Link to="/" >Home <i className="material-icons">home</i></Link>
            </div>
        </div>
    )
}

export default NotFound;