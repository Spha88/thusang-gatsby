import React from 'react';
import classes from './Hero.module.scss';
import Zoom from 'react-reveal/Zoom';
import background from '../../assets/images/background.png';
import LinkButton from '../UI/LinkButton/LinkButton';
import arrow_down from '../../assets/icons/expand_more.svg';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className={classes.Hero} style={{ backgroundImage: `url(${background})` }}>
            <div className={classes.HeroContent}>
                <Zoom delay={500}><h1>Make a difference in someone's life</h1></Zoom>
                <Zoom delay={1000}>
                    <LinkButton to="/donate" label="Donate Now" />
                </Zoom>
            </div>
            <div className={classes.Scroll}>
                <Zoom delay={2000} bottom distance={1000} duration={4000}>
                    <Link
                        to="about-section"
                        smooth={true}
                        offset={-80}
                        duration={1000}
                    >
                        <div className={classes.ScrollBtn}>
                            <img src={arrow_down} alt="scroll down button" />
                        </div>
                    </Link>
                </Zoom>
            </div>
        </div>
    )
}

export default Hero
