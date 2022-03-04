import React from "react";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {ingredientType} from "../../../types/Ingredient";
import PropTypes from "prop-types";
import {useDrag} from "react-dnd";
import {useSelector} from "react-redux";

const ItemCard = (props) => {
    const [{opacity}, ref] = useDrag({
        type: 'item',
        item: props.item,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });
    const chosenBun = useSelector(state => state.constructorOrder.chosenBun)

    const count = props.item.type === 'bun' ? (props.item._id === chosenBun._id ? 2 : 0) : props.item.count;


    return (
        <div className={props.class} onClick={() => props.onClick(props.item._id)} draggable ref={ref}
             style={{opacity}}>
            {count !== 0 && (<Counter count={count}/>)}
            <img alt={props.item.name} src={props.item.image_large}/>
            <section>
                <p className="text text_type_digits-default">
                    {props.item.fat} &nbsp;
                </p>
                <CurrencyIcon type="primary"/>
            </section>
            <p className="text text_type_main-default">
                {props.item.name}
            </p>
        </div>)
}


ItemCard.propTypes = {
    item: ingredientType.isRequired,
    class: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ItemCard;