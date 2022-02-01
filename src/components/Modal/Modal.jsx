import React from "react";
import * as ReactDOM from "react-dom";
import style from './Modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
        return ReactDOM.createPortal(
            <>
                <ModalOverlay close={props.close}/>
                <div className={style.modalWindow}>
                    <div className={style.info}>
                        <p className="text text_type_main-medium">
                            {props.data && props.data}
                        </p>
                        <CloseIcon type="primary" onClick={props.close}/>
                    </div>
                    {props.children}
                </div>
            </>,
            modalRoot
        );
}

Modal.propTypes = {
    data: PropTypes.string,
    close: PropTypes.func
};

export default Modal