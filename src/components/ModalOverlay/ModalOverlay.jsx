import React from "react";
import style from './ModalOverlay.module.css'
import {ingredientType} from "../../types/Ingredient";

const ModalOverlay = (props) => {
    return (
        <div className={style.overlay} onClick={() => props.close()}>
        </div>
    )
}

ModalOverlay.propTypes = {
    data: ingredientType
};

export default ModalOverlay