import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Container from '../UI/Container/Container';
import classes from './Mission.module.scss';
import mission_img from '../../assets/images/mission_img.png';

const Mission = () => {
    return (
        <Container>
            <div className={classes.Mission}>
                <div className={classes.Image}>
                    <Zoom delay={1000} slow fraction={.2}>
                        <img src={mission_img} alt="our mission" />
                    </Zoom>
                </div>
                <div className={classes.Content}>
                    <Zoom delay={1100}><h2>Our <span>Mission</span></h2></Zoom>
                    <Zoom delay={1300}><p>Our mission is to provide safe shelter and access to immediate professional counselling services and support for women and children affected by gender-based violence.</p></Zoom>
                    <Zoom delay={1500}><p>We do that, by empowering victims with life skills and recovery programs and providing necessary resources in underprivileged areas and families.</p></Zoom>
                </div>
            </div>
        </Container>
    )
}

export default Mission
