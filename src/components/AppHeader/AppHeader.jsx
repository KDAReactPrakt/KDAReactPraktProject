import React from "react";
import style from "./AppHeader.module.css";
import MainLogo from "./MainLogo/MainLogo";
import Entry from "./Entry/Entry";
import {Link, useLocation} from "react-router-dom";
import {BurgerIcon, ListIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () =>{
    const {pathname} = useLocation();
    const isMain = pathname === '/';
    const isOrders = pathname === '/orders';
        return (
        <section className={style.header}>
            <section className={style.wrapper}>
                <section className={style.menu}>
                    <Link to={'/'}>
                        <section className={style.menuItem}>
                            <BurgerIcon type={ isMain ? "primary" : "secondary" }/>
                            <p className={ !isMain ? "text text_type_main-default":"text text_type_main-default " + style.active}>
                                Конструктор
                            </p>
                        </section>
                    </Link>
                    <Link to={'/orders'}>
                        <section className={style.menuItem}>
                            <ListIcon type={ isOrders ? "primary" : "secondary" }/>
                            <p className={ !isOrders ? "text text_type_main-default":"text text_type_main-default " + style.active}>
                                Лента заказов
                            </p>
                        </section>
                    </Link>
                </section>
                <MainLogo/>
                <Entry path={pathname} />
            </section>
        </section>
    );
}


export default AppHeader;