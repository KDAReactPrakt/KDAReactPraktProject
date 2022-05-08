import React, {useRef, useState} from "react";
import style from './BurgerIngredients.module.css'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import ItemCard from "./ItemCard/ItemCard";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {useDispatch, useSelector} from "../../types/hooks";
import {CLEAR_CURRENT_ITEM, GET_CURRENT_ITEM} from "../../services/constants/currentItem";
import {SET_TAB} from "../../services/constants/tabs";
import {IIngridient, TChosenIngredients} from "../../types/Ingredient";

const AddTab = () => {
    const current = useSelector((state: any) => state.tab.activeTab)
    return (
        <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={()=>{}}>
                Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={()=>{}}>
                Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={()=>{}}>
                Начинки
            </Tab>
        </div>
    )
}

const BurgerIngredients = () => {
    const activeModal = useSelector((state: any) => state.currentItem.activeModal)
    const [height, setHeight] = useState<number>(0);
    const data = useSelector( (state: any) => state.ingredients.ingredientsData)
    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement | any>(null);
    const refBun = useRef<HTMLDivElement | any>(null);
    const refSauce = useRef<HTMLDivElement | any>(null);
    const refMain = useRef<HTMLDivElement | any>(null);

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

    const setActiveIngredientId = (id:string) => {
        window.history.pushState(null,'','/ingredients/' + findElement(id)._id);
        dispatch({
            type: GET_CURRENT_ITEM,
            data: findElement(id)
        })
    }

    const closeModal = () => {
        window.history.pushState(null,'','/');
        dispatch({
            type: CLEAR_CURRENT_ITEM
        })
    }

    const findElement = (id:string) => {
        return data.find( (item:TChosenIngredients) => item._id === id)
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
                {data.map((element:IIngridient) => (
                    element.type === 'bun' && (
                        <ItemCard key={element._id} item={element} classProps={style.ingredientsItem} onClick={setActiveIngredientId}/>)
                ))}
                <div className={style.ingredientsHeader} ref={refSauce}>
                    <p className="text text_type_main-medium">
                        Соусы
                    </p>
                </div>
                {data.map((element:IIngridient, index:number) => (
                    element.type === 'sauce' && (
                        <ItemCard key={index} item={element} classProps={style.ingredientsItem} onClick={setActiveIngredientId}/>)
                ))}
                <div className={style.ingredientsHeader} ref={refMain}>
                    <p className="text text_type_main-medium">
                        Начинки
                    </p>
                </div>
                {data.map((element:IIngridient, index:number) => (
                    element.type === 'main' && (
                        <ItemCard key={index} item={element} classProps={style.ingredientsItem} onClick={setActiveIngredientId}/>)
                ))}
            </div>
        </div>
    )
}

export default BurgerIngredients;
