import React from "react";
import style from "./AppHeader.module.css";
import MenuItem from "./MenuItem/MenuItem";
import MainLogo from "./MainLogo/MainLogo";
import Entry from "./Entry/Entry";

const AppHeader = () => (
  <section className={style.header}>
      <section className={style.wrapper}>
          <section className={style.menu}>
              <MenuItem text="Конструктор" />
              <MenuItem text="Лента заказов" />
          </section>
          <MainLogo />
          <Entry />
      </section>
  </section>
);

export default AppHeader;