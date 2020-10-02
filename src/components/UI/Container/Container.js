import React from 'react'
import classes from './Container.module.scss'

const Container = ({ children }) => {
    return (
        <section className={classes.Container}>
            {children}
        </section>
    )
}

export default Container;
