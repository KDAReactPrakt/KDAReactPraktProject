import React, {FC} from "react";
import * as ReactDOM from "react-dom";
import style from './Modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const modalRoot: HTMLElement = document.getElementById("react-modals")!;

type TProps = {
    title?: string;
    close: () => void;
}

const Modal:FC<TProps> = (props) => {
    const {title, close, children} = props;
    const escFunction = React.useCallback((event) => {
        if(event.key === 'Escape') {
            close();
        }
    }, [close]);

    React.useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

        return ReactDOM.createPortal(
            <>
                <ModalOverlay close={close}/>
                <div className={style.modalWindow}>
                    <div className={style.info}>
                        <p className="text text_type_main-medium">
                            {title}
                        </p>
                        <CloseIcon type="primary" onClick={close}/>
                    </div>
                    {children}
                </div>
            </>,
            modalRoot
        );
}

export default Modal