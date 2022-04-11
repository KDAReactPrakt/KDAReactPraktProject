import React, {FC} from "react";
import style from './ModalOverlay.module.css'

interface IProps {
    close: () => void;
}

const ModalOverlay: FC<IProps> = (props) => {
    return (
        <div className={style.overlay} onClick={() => props.close()}>
        </div>
    )
}

export default ModalOverlay