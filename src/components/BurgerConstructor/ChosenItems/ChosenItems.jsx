import React, {useRef} from "react";
import style from "../BurgerConstructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag} from "react-dnd";
import {ingredientType} from "../../../types/Ingredient";
import PropTypes from "prop-types";

const ChosenItems = (props) => {
    const chosenItemId = props.item.uid;
    const ref = useRef(null);
    const [{opacityItem}, drag] = useDrag({
        type: 'chosenItem',
        item: {chosenItemId, ref},
        collect: monitor => ({
            opacityItem: monitor.isDragging() ? 0.5 : 1
        })
    });
    drag(ref);

    return (
        <div className={style.middleItem} draggable style={{opacityItem}} ref={ref}>
            <section>
                <DragIcon type="primary"/>
            </section>
            <ConstructorElement
                text={props.item.name}
                price={props.item.price}
                thumbnail={props.item.image_mobile}
                handleClose={() => props.dropItem(props.item.uid)}
            />
        </div>
    )
}

ChosenItems.propTypes = {
    item: ingredientType.isRequired,
    dropItem: PropTypes.func.isRequired,
}

export default ChosenItems