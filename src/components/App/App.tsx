import React from 'react';
import style from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function App() {
  return (
    <div className={style.App}>
          <AppHeader />
      <div className={style.Wrapper}>
          <section className={style.mainContentBlock}>
              <BurgerIngredients />
          </section>
          <section className={style.mainContentBlock}>
              <BurgerConstructor />
          </section>
      </div>
    </div>
  );
}

export default App;
