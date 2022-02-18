import React from "react";
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './BurgerConstructor.module.css'
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import {ConstructorContext} from "../../services/constructorContext";
import {URL} from '../../data/data'

const SAVE_SUM = 'SAVE_SUM'

const initialState = 0

function reducer(state, action) {
    switch (action.type) {
        case SAVE_SUM:
            return action.sum;
        default:
            throw new Error(`Wrong type of action: ${action.type}`);
    }
}

const BurgerConstructor = () => {
    const data = React.useContext(ConstructorContext);
    const [bun] = React.useState(0);
    const [orderNumber, setOrderNumber] = React.useState(0)
    const [sum, sumDispatcher] = React.useReducer(reducer, initialState, undefined);
    const [middleElement] = React.useState([1,3,4])
    const [loadingComplete, setLoadingComplete] = React.useState(false)

    const closeModal = () => {
        setLoadingComplete(false);
        setOrderNumber(0);
    }

    const getSum = () => {
        return middleElement.reduce(function(sum, current) {
            return sum + data[current].price;
        }, 0) + 2 * data[bun].price;
    }

    React.useEffect(()=> sumDispatcher({type:SAVE_SUM, sum: getSum()}),[bun, middleElement]);

    const getOrderNumber = () => {
        let result = {
            ingredients: []
        };
        result.ingredients.push(data[bun]._id);
        middleElement.map((item) => result.ingredients.push(data[item]._id));
        result.ingredients.push(data[bun]._id);

        fetch(URL + 'orders',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(result)
        })
            .then(res =>{
                if (!res.ok) {
                    return Promise.reject(res.status);
                }
                return res.json();
            })
            .then(data => {
                setOrderNumber(data.order.number);
                setLoadingComplete(true);
            })
            .catch(e => alert(e));
    }

    const openModal = () => {
        getOrderNumber();
    }

    return (
        <div>
            {orderNumber !== 0 && loadingComplete && (
                <Modal close={closeModal}>
                    <OrderDetails number={orderNumber}/>
                </Modal>
            )}
            <div className={style.constructor}>
                <div className={style.item}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={data[bun].name + ' (верх)'}
                        price={data[bun].price}
                        thumbnail={data[bun].image_mobile}
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
                        text={data[bun].name + ' (низ)'}
                        price={data[bun].price}
                        thumbnail={data[bun].image_mobile}
                    />
                </div>
            </div>
            <div className={style.summary}>
                <div className={style.info}>
                    <p className="text text_type_digits-medium">{sum}&nbsp;</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button type="primary" size="medium" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
};

export default BurgerConstructor;
