import React from "react";
import style from './BurgerIngredients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import ItemCard from "./ItemCard/ItemCard";
import ModalOverlay from "./ModalOverlay/ModalOverlay";
import PropTypes from "prop-types";
import {ingredientType} from "../../types/Ingredient";

const AddTab = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}

const BurgerIngredients = (props) => {
    const [activeModal, setActiveModal] = React.useState(false);
    const [activeIngredient, setActiveIngredient] = React.useState()
    const data = props.data;

    const setActiveIngredientId = (id) => {
        setActiveIngredient(findElement(id));
        setActiveModal(true);
    }

    const closeModal = () => {
        setActiveModal(false);
    }

    const findElement = (id) => {
        return data.find( item => item._id === id)
    }

    return (
        <div className={style.mainBlock}>
            {activeModal && (<ModalOverlay data={activeIngredient} close={closeModal}/>)}
            <div className={style.nameBlock}>
                <p className="text text_type_main-large">
                    Соберите бургер
                </p>
            </div>
            <div className={style.tabBlock}>
                <AddTab/>
            </div>
            <div className={style.ingredientsBlock}>
                <div className={style.ingredientsHeader}>
                    <p className="text text_type_main-medium">
                        Булки
                    </p>
                </div>
                {data.map((element) => (
                    element.type === 'bun' && (
                        <ItemCard key={element._id} item={element} class={style.ingredientsItem} onClick={setActiveIngredientId}/>)
                ))}
                <div className={style.ingredientsHeader}>
                    <p className="text text_type_main-medium">
                        Соусы
                    </p>
                </div>
                {data.map((element, index) => (
                    element.type === 'sauce' && (
                        <ItemCard key={index} item={element} class={style.ingredientsItem}/>)
                ))}
                <div className={style.ingredientsHeader}>
                    <p className="text text_type_main-medium">
                        Начинки
                    </p>
                </div>
                {data.map((element, index) => (
                    element.type === 'main' && (
                        <ItemCard key={index} item={element} class={style.ingredientsItem}/>)
                ))}
            </div>
        </div>
    )
}

BurgerIngredients.propTypes = PropTypes.arrayOf(ingredientType);

export default BurgerIngredients;