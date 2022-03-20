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
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Register/Register/Register";
import ForgotPwd from "../pages/ForgotPassword/ForgotPwd/ForgotPwd";
import ResetPwd from "../pages/ResetPassword/ResetPwd/ResetPwd";
import Profile from "../pages/Profile/Profile/Profile";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import IngredientsId from "../pages/IngredientsId/IngredientsId/IngredientsId";
import {ProtectedForAuthRoute} from "../ProtectedForAuthRoute/ProtectedForAuthRoute";
import {ProtectedForAnyRoute} from "../ProtectedForAnyRoute/ProtectedForAnyRoute";


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
                    <ProtectedForAuthRoute path="/login">
                        <Login/>
                    </ProtectedForAuthRoute>
                    <ProtectedForAuthRoute path="/register">
                        <Register/>
                    </ProtectedForAuthRoute>
                    <ProtectedForAuthRoute path="/forgot-password">
                        <ForgotPwd/>
                    </ProtectedForAuthRoute>
                    <ProtectedForAnyRoute path="/reset-password">
                        <ResetPwd/>
                    </ProtectedForAnyRoute>
                    <ProtectedRoute path="/profile">
                        <Profile/>
                    </ProtectedRoute>
                    <Route path="/ingredients/:id">
                        <IngredientsId/>
                    </Route>
                    <Route path="/" exact={true}>
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
                    </Route>
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
