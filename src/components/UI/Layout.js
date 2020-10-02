import React from 'react';
import classes from './Layout.module.scss';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Nav />
            <div className={classes.Container}>
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
