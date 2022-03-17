import React, {useEffect} from 'react';
import style from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {getIngredientData} from "../../services/actions/getIngredient";
import {useDispatch, useSelector} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ForgotPwd from "../ForgotPwd/ForgotPwd";
import ResetPwd from "../ResetPwd/ResetPwd";
import Profile from "../Profile/Profile";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import IngredientsId from "../IngredientsId/IngredientsId";


function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getIngredientData());
    },[dispatch])

    const loadingComplete = useSelector(state => {
        return state.ingredients.ingredientsSuccess;
    })

    return loadingComplete ? (
        <div className={style.App}>
            <Router>
                <AppHeader/>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/forgot-password">
                        <ForgotPwd/>
                    </Route>
                    <Route path="/reset-password">
                        <ResetPwd/>
                    </Route>
                    <ProtectedRoute path="/profile">
                        <Profile/>
                    </ProtectedRoute>
                    <ProtectedRoute path="/ingredients/:id">
                        <IngredientsId/>
                    </ProtectedRoute>
                    <ProtectedRoute path="/" exact={true}>
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
                    </ProtectedRoute>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </div>
    ) : (
        <>
            Загрузка данных
        </>);
}

export default App;
