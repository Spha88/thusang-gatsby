import React from 'react'
import Container from '../UI/Container/Container';
import classes from './ContactUs.module.scss';
import ContactForm from './ContactForm/ContactForm';

const ContactUs = () => {
    return (
        <Container>
            <div className={classes.ContactUs}>
                <h2>Contact Us</h2>
                <ContactForm />
            </div>
        </Container>
    )
}

export default ContactUs
