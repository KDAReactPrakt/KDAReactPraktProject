import React from "react";
import style from "./Entry.module.css"
import {ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";

const Entry = () => {
    const history = useHistory().location.pathname;
    return (
        <Link className={history === '/profile' ? style.entry + ' ' + style.active : style.entry} to='/profile'>
            <ProfileIcon type={history ==='/profile' ? "primary" : "secondary"}/>
            <p className="text text_type_main-default">
                Личный кабинет
            </p>
        </Link>
    );
};

export default Entry;