import React from 'react';
import classes from './CssImageSlide.module.scss';
import slide1 from '../../../assets/images/slide/slide1.png';
import slide2 from '../../../assets/images/slide/slide2.png';
import slide3 from '../../../assets/images/slide/slide3.png';
import slide4 from '../../../assets/images/slide/slide4.png';


const CssImageSlide = () => {
    return (
        <div className={classes.CssImageSlide}>
            <img src={slide1} alt="slide 1" />
            <img src={slide2} alt="slide 2" />
            <img src={slide3} alt="slide 3" />
            <img src={slide4} alt="slide 4" />
        </div>
    )
}

export default CssImageSlide
