import React from "react";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './BurgerConstructor.module.css'
import PropTypes from "prop-types";
import {ingredientType} from "../../types/Ingredient";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";

const BurgerConstructor = (props) => {
    const data = props.data;
    const [activeModal, setActiveModal] = React.useState(false);
    const [middleElement] = React.useState([1,3,4])

    const closeModal = () => {
        setActiveModal(false);
    }

    const openModal = () => {
        setActiveModal(true)
    }
    return (
        <div>
            {activeModal && (
                <Modal close={closeModal}>
                    <OrderDetails/>
                </Modal>
            )}
            <div className={style.constructor}>
                <div className={style.item}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={data[0].name + ' (верх)'}
                        price={data[0].price}
                        thumbnail={data[0].image_mobile}
                    />
                </div>
                <div className={style.middleBlock}>
                    {middleElement.map((item,index)=>(
                        <div className={style.middleItem} key={index}>
                            <section>
                                <DragIcon type="primary" />
                            </section>
                            <ConstructorElement
                                text={data[item].name}
                                price={data[item].price}
                                thumbnail={data[item].image_mobile}
                            />
                        </div>
                    ))}
                </div>
                <div className={style.item}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={data[0].name + ' (низ)'}
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
                <Button type="primary" size="medium" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
};

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(ingredientType.isRequired).isRequired
};

export default BurgerConstructor;