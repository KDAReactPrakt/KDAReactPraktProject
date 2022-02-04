import React from "react";
import style from "./Entry.module.css"
import {ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const Entry = () => (
    <section className={style.entry}>
        <ProfileIcon type={"primary"}/>
        <p className="text text_type_main-default">
            Личный кабинет
        </p>
    </section>
);

export default Entry;