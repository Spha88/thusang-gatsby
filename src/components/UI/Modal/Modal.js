import React from 'react'
import classes from './Modal.module.scss';

const Modal = ({ open, close, message }) => {
    const keyPress = (e) => { console.log("clicked") }
    return (
        <div className={`${classes.Modal} ${!open && classes.close}`} onClick={close} role="button" tabIndex="0" onKeyDown={keyPress} >
            <div>
                <h2>{message}</h2>
                <p>Thank you.</p>
            </div>
        </div>
    )
}

export default Modal
