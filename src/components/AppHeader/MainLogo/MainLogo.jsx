import React from "react";
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import style from "./../AppHeader.module.css"


const MainLogo = () => (
    <div className={style.mainLogo}>
        <Logo />
    </div>
);

export default MainLogo;