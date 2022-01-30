import React from "react";
import * as ReactDOM from "react-dom";
import style from './Modal.module.css'
import IngredientDetails from "./IngredientDetails/IngredientDetails";
import OrderDetails from "./OrderDetails/OrderDetails";

const modalRoot = document.getElementById("react-modals");

const Modal = (props) => {
        return ReactDOM.createPortal(
            <>
                <div className={style.overlay}>
                    {props.data ? (
                        <IngredientDetails data={props.data} close={props.close}/>
                    ) : (
                        <OrderDetails data={props.data} close={props.close} />
                    ) }
                </div>
            </>,
            modalRoot
        );
}

export default Modal