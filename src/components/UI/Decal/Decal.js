import React from 'react';
import Zoom from 'react-reveal/Zoom';
import classes from './Decal.module.scss';
import decal_bg from '../../../assets/images/decal_bg.png';

const Decal = ({ heading, color }) => {
    return (
        <div className={classes.Decal} style={{ backgroundImage: `url(${decal_bg})`, color: color }}>
            <div className={classes.DecalInner}>
                <Zoom><h2>{heading}</h2></Zoom>
            </div>
        </div>
    )
}

export default Decal 
