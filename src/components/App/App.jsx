import React from 'react';
import style from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import ingredientsMap from '../../functions/ingredientsMap'
import {ConstructorContext} from "../../services/constructorContext";
import {URL} from '../../data/data'

function App() {
    const [state, setState] = React.useState([
        {
            _id: '',
            name: '',
            type: '',
            proteins: '',
            fat: '',
            carbohydrates: '',
            calories: '',
            price: '',
            image: '',
            image_mobile: '',
            image_large: '',
            __v:'',
        }
    ]);
    const [loadingComplete, setLoadingComplete] = React.useState(false)

    React.useEffect(()=>{
    fetch(URL + 'ingredients')
        .then(res =>{
            if (!res.ok) {
                return Promise.reject(res.status);
            }
            return res.json();
        })
        .then(data => {
            setState(ingredientsMap(data.data));
            setLoadingComplete(true);
        })
        .catch(e => alert(e));
    },[])

    return loadingComplete ? (
        <div className={style.App}>
            <AppHeader/>
            <div className={style.Wrapper}>
                <section className={style.mainContentBlock}>
                    <BurgerIngredients data={state}/>
                </section>
                <section className={style.mainContentBlock}>
                    <ConstructorContext.Provider value={state}>
                        <BurgerConstructor />
                    </ConstructorContext.Provider>
                </section>
            </div>
        </div>
    ) : (
        <>
            Загрузка данных
        </>);
}

export default App;
