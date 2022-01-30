import React from "react";
import Modal from "../Modal/Modal";
import style from './ModalOverlay.module.css'

const ModalOverlay = (props) => {
    return (
        <div className={style.overlay}>
            <Modal data={props.data} close={props.close}/>
        </div>
    )
}

export default ModalOverlay