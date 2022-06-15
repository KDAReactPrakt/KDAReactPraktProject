import React from "react";
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink } from "react-router-dom";

const MainLogo = () => (
    <NavLink to='/'>
        <Logo />
    </NavLink>
);

export default MainLogo;