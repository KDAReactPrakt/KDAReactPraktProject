import React from "react";
import * as ReactDOM from "react-dom";
import style from './Modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
    const escFunction = React.useCallback((event) => {
        if(event.key === 'Escape') {
            props.close();
        }
    }, [props.close]);

    React.useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

        return ReactDOM.createPortal(
            <>
                <ModalOverlay close={props.close}/>
                <div className={style.modalWindow}>
                    <div className={style.info}>
                        <p className="text text_type_main-medium">
                            {props.title}
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
    title: PropTypes.string,
    close: PropTypes.func.isRequired
};

export default Modal