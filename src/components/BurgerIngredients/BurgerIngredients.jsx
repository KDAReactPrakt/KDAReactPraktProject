import React from "react";
import style from './BurgerIngredients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import ItemCard from "./ItemCard/ItemCard";
import PropTypes from "prop-types";
import {ingredientType} from "../../types/Ingredient";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

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
    const [activeIngredient, setActiveIngredient] = React.useState({})
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

    const escFunction = React.useCallback((event) => {
        if(event.keyCode === 27) {
            setActiveModal(false);
        }
    }, []);

    React.useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    return (
        <div className={style.mainBlock}>
            {activeModal && (
                <Modal data="Детали ингредиента" close={closeModal}>
                      <IngredientDetails data={activeIngredient} />
                </Modal>
            )}
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
                        <ItemCard key={index} item={element} class={style.ingredientsItem}  onClick={setActiveIngredientId}/>)
                ))}
                <div className={style.ingredientsHeader}>
                    <p className="text text_type_main-medium">
                        Начинки
                    </p>
                </div>
                {data.map((element, index) => (
                    element.type === 'main' && (
                        <ItemCard key={index} item={element} class={style.ingredientsItem}  onClick={setActiveIngredientId}/>)
                ))}
            </div>
        </div>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientType)
};

export default BurgerIngredients;