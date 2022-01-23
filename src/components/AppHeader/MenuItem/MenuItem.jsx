import React from "react";
import {BurgerIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./MenuItem.module.css";

const MenuItem = (props) => (
    <section className={style.menuItem}>
        <BurgerIcon type={"primary"}/>
        <p className="text text_type_main-default">
            {props.text}
        </p>
    </section>
);

export default MenuItem;