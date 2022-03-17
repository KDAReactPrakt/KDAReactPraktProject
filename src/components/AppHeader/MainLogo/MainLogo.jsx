import React from "react";
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import style from "./../AppHeader.module.css"
import {Link} from "react-router-dom";


const MainLogo = () => (
    <Link className={style.mainLogo} to='/'>
        <Logo />
    </Link>
);

export default MainLogo;