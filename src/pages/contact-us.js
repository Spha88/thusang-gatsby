import React from 'react';

import Layout from '../components/UI/Layout';
import classes from './ContactUs.module.scss';
import Decal from '../components/UI/Banner/Banner';
import ContactForm from '../components/ContactUs/ContactForm/ContactForm';
import Container from '../components/UI/Contain/Contain';

const ContactUs = () => {
    return (
        <Layout>
            <div className={`${classes.Contact} page`}>
                <Decal heading="Contact us" />
                <Container>
                    <div className={classes.ContactForm} >
                        <h2>Send us an Email</h2>
                        <ContactForm />
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default ContactUs
