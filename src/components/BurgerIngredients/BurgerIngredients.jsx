import React, {useRef, useState} from "react";
import style from './BurgerIngredients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import ItemCard from "./ItemCard/ItemCard";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_CURRENT_ITEM, GET_CURRENT_ITEM} from "../../services/actions/currentItem";
import {SET_TAB} from "../../services/actions/tabs";

const AddTab = () => {
    const current = useSelector(state => state.tab.activeTab)
    return (
        <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'}>
                Булки
            </Tab>
            <Tab value="two" active={current === 'two'}>
                Соусы
            </Tab>
            <Tab value="three" active={current === 'three'}>
                Начинки
            </Tab>
        </div>
    )
}

const BurgerIngredients = () => {
    const activeModal = useSelector(state => state.currentItem.activeModal)
    const [height, setHeight] = useState(null);
    const data = useSelector( state => state.ingredients.ingredientsData)
    const dispatch = useDispatch();
    const ref = useRef(null);
    const refBun = useRef(null);
    const refSauce = useRef(null);
    const refMain = useRef(null);

    const tabPosition = {
        bun: 0,
        sauce: 0,
        main: 0,
        activeTab: 'one'
    }

    const onScroll = () => {
        height === null && setHeight(ref.current.getBoundingClientRect().y);
        tabPosition.bun = refBun.current.getBoundingClientRect().y;
        tabPosition.sauce = refSauce.current.getBoundingClientRect().y;
        tabPosition.main = refMain.current.getBoundingClientRect().y;

        if(tabPosition.main < height){
            dispatch({
                type: SET_TAB,
                tab: 'three'
            })
        } else {
            if(tabPosition.sauce <height) {
                dispatch({
                    type: SET_TAB,
                    tab: 'two'
                })
            } else {
                dispatch({
                    type: SET_TAB,
                    tab: 'one'
                })
            }
        }
    }

    const setActiveIngredientId = (id) => {
        dispatch({
            type: GET_CURRENT_ITEM,
            data: findElement(id)
        })
    }

    const closeModal = () => {
        dispatch({
            type: CLEAR_CURRENT_ITEM
        })
    }

    const findElement = (id) => {
        return data.find( item => item._id === id)
    }

    return (
        <div className={style.mainBlock}>
            {activeModal && (
                <Modal title="Детали ингредиента" close={closeModal}>
                      <IngredientDetails />
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
            <div className={style.ingredientsBlock}  ref={ref} onScroll={onScroll}>
                <div className={style.ingredientsHeader}  ref={refBun}>
                    <p className="text text_type_main-medium">
                        Булки
                    </p>
                </div>
                {data.map((element) => (
                    element.type === 'bun' && (
                        <ItemCard key={element._id} item={element} class={style.ingredientsItem} onClick={setActiveIngredientId}/>)
                ))}
                <div className={style.ingredientsHeader} ref={refSauce}>
                    <p className="text text_type_main-medium">
                        Соусы
                    </p>
                </div>
                {data.map((element, index) => (
                    element.type === 'sauce' && (
                        <ItemCard key={index} item={element} class={style.ingredientsItem} onClick={setActiveIngredientId}/>)
                ))}
                <div className={style.ingredientsHeader} ref={refMain}>
                    <p className="text text_type_main-medium">
                        Начинки
                    </p>
                </div>
                {data.map((element, index) => (
                    element.type === 'main' && (
                        <ItemCard key={index} item={element} class={style.ingredientsItem} onClick={setActiveIngredientId}/>)
                ))}
            </div>
        </div>
    )
}

export default BurgerIngredients;
