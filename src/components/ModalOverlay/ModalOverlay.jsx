import React from "react";
import style from './ModalOverlay.module.css'
import PropTypes from "prop-types";

const ModalOverlay = (props) => {
    return (
        <div className={style.overlay} onClick={() => props.close()}>
        </div>
    )
}

ModalOverlay.propTypes = {
    close: PropTypes.func.isRequired
};

export default ModalOverlay