import React from 'react';
import classes from './Layout.module.scss';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import SEO from '../seo';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <SEO title="Thusang Social Center" />
            <Nav />
            <div className={classes.Container}>
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
