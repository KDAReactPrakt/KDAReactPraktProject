import React from 'react';
import style from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import ingredientsMap from '../../functions/ingredientsMap'

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
    const URL = 'https://norma.nomoreparties.space/api/ingredients'

    React.useEffect(()=>{
    fetch(URL)
        .then(res => res.json())
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
                    <BurgerConstructor data={state}/>
                </section>
            </div>
        </div>
    ) : (
        <>
            Загрузка данных
        </>);
}

export default App;
