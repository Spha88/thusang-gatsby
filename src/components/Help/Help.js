import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Container from '../UI/Container/Container';
import classes from './Help.module.scss';
import helping_img from '../../assets/images/helping_hand.png';
import LinkButton from '../UI/LinkButton/LinkButton';

const Help = () => {
    return (
        <Container>
            <div className={classes.Help}>
                <div className={classes.Content}>
                    <Zoom delay={500}><h2>Raise Your Helping Hand</h2></Zoom>
                    <Zoom delay={600}><p>Help us create a safer environment for <span>women</span> and <span>children</span></p></Zoom>
                    <Zoom delay={1000}><LinkButton to="/donate" label="Donate Now" /></Zoom>
                </div>
                <div className={classes.Image}>
                    <Zoom delay={1000}><img src={helping_img} alt="helping hand" /></Zoom>
                </div>
            </div>
        </Container>
    )
}

export default Help
