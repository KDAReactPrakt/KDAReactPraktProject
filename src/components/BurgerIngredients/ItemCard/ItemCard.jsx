import React from "react";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from "../../../types/Ingredient";
import PropTypes from "prop-types";

const ItemCard = (props) => (
    <div className={props.class} onClick={()=>props.onClick(props.item._id)}>
        <Counter count={1}/>
        <img alt={props.item.name} src={props.item.image_large}/>
        <section>
            <p className="text text_type_digits-default">
                {props.item.fat} &nbsp;
            </p>
            <CurrencyIcon type="primary" />
        </section>
        <p className="text text_type_main-default">
            {props.item.name}
        </p>
    </div>
);

ItemCard.propTypes = {
    item: ingredientType,
    class: PropTypes.string,
    onclick: PropTypes.func
}

export default ItemCard;