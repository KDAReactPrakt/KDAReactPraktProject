import React from 'react';
import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";

function App() {
  return (
    <div className="App">
          <AppHeader />
      <div className="Wrapper">
          <section className="mainContentBlock">
              <BurgerIngredients />
          </section>
          <section className="mainContentBlock">
              <BurgerConstructor />
          </section>
      </div>
    </div>
  );
}

export default App;
