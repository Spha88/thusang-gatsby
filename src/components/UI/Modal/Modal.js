import React from 'react'
import classes from './Modal.module.scss';

const Modal = ({ open, close, message }) => {
    return (
        <div className={`${classes.Modal} ${!open && classes.close}`} onClick={close} >
            <div>
                <h2>{message}</h2>
                <p>Thank you.</p>
            </div>
        </div>
    )
}

export default Modal
