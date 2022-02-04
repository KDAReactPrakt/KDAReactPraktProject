import React from "react";
import {BurgerIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./MenuItem.module.css";
import PropTypes from "prop-types";

const MenuItem = (props) => {
    const className = props.text === "Конструктор" ? "text text_type_main-default":"text text_type_main-default "+ style.inactive;

    return (
        <section className={style.menuItem}>
            {props.text === "Конструктор" ? <BurgerIcon type="primary"/> : <ListIcon type="secondary"/>}
            <p className={className}>
                {props.text}
            </p>
        </section>
    )
};


MenuItem.propTypes = {
        text: PropTypes.string.isRequired
    };

export default MenuItem;