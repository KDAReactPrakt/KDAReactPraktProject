import React, {useEffect} from 'react';
import style from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {getIngredientData} from "../../functions/getIngredient";
import {useDispatch, useSelector} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";


function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getIngredientData());
    },[])

    const loadingComplete = useSelector(state => {
        return state.ingredients.ingredientsSuccess;
    })

    return loadingComplete ? (
        <div className={style.App}>
            <AppHeader/>
            <DndProvider  backend={HTML5Backend}>
                <div className={style.Wrapper}>
                    <section className={style.mainContentBlock}>
                        <BurgerIngredients/>
                    </section>
                    <section className={style.mainContentBlock}>
                        <BurgerConstructor />
                    </section>
                </div>
            </DndProvider>
        </div>
    ) : (
        <>
            Загрузка данных
        </>);
}

export default App;
