import React from "react";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const ItemCard = (props) => (
    <div className={props.class} key={props.index}>
        <Counter count={1}/>
        <img alt={props.item.name} src={props.item.image_large}/>
        <section>
            <p className="text text_type_digits-default">
                {props.item.fat} &nbsp;
            </p>
            <CurrencyIcon type="primary" />
        </section>


        {props.item.name}
    </div>
);

export default ItemCard;