import React, {FC} from "react";
import style from './OrderDetails.module.css'
import {CheckMarkIcon} from "@ya.praktikum/react-developer-burger-ui-components";

interface IProps {
    number: number
}

const OrderDetails: FC<IProps> = (props) => {
    return (
        <div className={style.infoBlock}>
            <div className={style.number}>
                <p className="text text_type_digits-large">{props.number}</p>
            </div>
            <div className={style.ident}>
                <p className="text text_type_main-default">
                    идентификатор заказа
                </p>
            </div>
            <div className={style.ok}>
                <CheckMarkIcon type="primary"/>
            </div>
            <div className={style.status}>
                <p className="text text_type_main-default">
                    Ваш заказ Начали готовить
                </p>
            </div>
            <div className={style.toDo}>
                <p className="text text_type_main-small">
                    Дождитесь готовности на орбитальной станции
                </p>
            </div>
        </div>
    )
}

export default OrderDetails