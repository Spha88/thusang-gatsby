import React from 'react';
import Zoom from 'react-reveal/Zoom';
import classes from './Banner.module.scss';
import decal_bg from '../../../assets/images/decal_bg.png';

const Banner = ({ heading, color }) => {
    return (
        <div className={classes.Decal} style={{ backgroundImage: `url(${decal_bg})`, color: color }}>
            <div className={classes.DecalInner}>
                <Zoom><h2>{heading}</h2></Zoom>
            </div>
        </div>
    )
}

export default Banner 
