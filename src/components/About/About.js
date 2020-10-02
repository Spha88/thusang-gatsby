import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import classes from './About.module.scss';
import Container from '../UI/Container/Container';
import CssImageSlide from '../UI/CssImageSlide/CssImageSlide';

const About = () => {
    return (
        <Container>
            <section className={classes.About} id="about-section">
                <div className={classes.Content}>
                    <Fade delay={500}><h2><span>About</span> Us</h2></Fade>
                    <Zoom delay={1000}>
                        <p><span>Thusang Social Center</span> is non-profit organisation established to provide support services to individuals and families affected by gender-based violence and femicide.
                    We are based in Aliwal North, in the Eastern Cape province of South Africa.</p>
                    </Zoom>
                </div>

                <div className={classes.Image}>
                    <Zoom>
                        <CssImageSlide />
                    </Zoom>
                </div>

            </section>
        </Container>
    )
}

export default About
