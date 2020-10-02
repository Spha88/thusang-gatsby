import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Container from '../UI/Container/Container';
import classes from './HowToHelp.module.scss';

const HowToHelp = () => {
    return (
        <Container>
            <div className={classes.HowToHelp}>
                <h2 className={classes.Heading}>How you can help?</h2>
                <div className={classes.Content}>
                    <div className={classes.Paragraph}>
                        <Zoom delay={500}><h2>Send a <span>donation</span></h2></Zoom>
                        <Zoom delay={1000}><p><strong>Giving online has never been more secure, convenient or hassle-free.</strong></p></Zoom>
                        <Zoom delay={1500}><p>For your convenience, we are therefore working on creating a one-click donation button, which will be deployed soon.</p></Zoom>
                        <Zoom delay={1800}><p>In the mean time, please use our bank account to send your donation.</p></Zoom>
                        <Zoom delay={1900}><p>To prevent fraudulent actions, we do not accept or collect cash and cheque donations.
                        We therefore advise you not to give any donation to anyone claiming to work for our organisation</p></Zoom>
                    </div>
                    <div className={classes.Paragraph}>
                        <Zoom delay={500}><h2>Become a <span>member</span></h2></Zoom>
                        <Zoom delay={1000}><p>You can get involved today by becoming a Volunteer. Sign up and you will be joining a group of change-makers, a network strong enough to impact positive change in the lives of women and children.</p></Zoom>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default HowToHelp
