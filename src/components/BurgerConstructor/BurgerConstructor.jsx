import React from "react";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import content from '../../utils/data.json';
import style from './BurgerConstructor.module.css'

const BurgerConstructor = () => {
    const [data] = React.useState(content);
    return (
        <div>
            <div className={style.constructor}>
                <div className={style.item}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={data[0].name}
                        price={data[0].price}
                        thumbnail={data[0].image_mobile}
                    />
                </div>
                <div className={style.middleItem}>
                    <section>
                        <DragIcon type="primary" />
                    </section>
                    <ConstructorElement
                        text={data[1].name}
                        price={data[1].price}
                        thumbnail={data[1].image_mobile}
                    />
                </div>
                <div className={style.middleItem}>
                    <section>
                        <DragIcon type="primary" />
                    </section>
                    <ConstructorElement
                        text={data[1].name}
                        price={data[1].price}
                        thumbnail={data[1].image_mobile}
                    />
                </div>
                <div className={style.middleItem}>
                    <section>
                        <DragIcon type="primary" />
                    </section>
                    <ConstructorElement
                        text={data[1].name}
                        price={data[1].price}
                        thumbnail={data[1].image_mobile}
                    />
                </div>
                <div className={style.item}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={data[0].name}
                        price={data[0].price}
                        thumbnail={data[0].image_mobile}
                    />
                </div>
            </div>
            <div className={style.summary}>
                <div className={style.info}>
                    <p className="text text_type_digits-medium">100500&nbsp;</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
};

export default BurgerConstructor;