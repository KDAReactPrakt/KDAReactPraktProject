import React, { FC } from 'react';
import { useSelector } from '../../../../types/hooks';
import {useLocation, useParams} from 'react-router-dom';
import { getOrderDate } from '../../../../functions/getDateToOrder';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TOrder } from '../../../../types/wsData';
import styles from './FeedDetail.module.css';
import {IIngridient} from "../../../../types/Ingredient";

const FeedDetails: FC = () => {
    const idFromStore = useSelector((store:any) => store.currentItem.currentOrderNumber);
    const { id } = useParams<{id:string}>();
    const path = useLocation().pathname;
    const finallyId = idFromStore === '' ? id : idFromStore;
    const orders  = useSelector(
        (store:any) => (path.indexOf('feed') === -1) ? store.wsConnectionUser.data.orders : store.wsConnection.data.orders
    );
    const loadingOver = useSelector(
        (store:any) => (path.indexOf('feed') === -1) ? store.wsConnectionUser.wsConnected : store.wsConnection.wsConnected
    );

    const items = useSelector(
        (store:any) => store.ingredients.ingredientsData
    )

    let order = null;
    if (orders.length > 0 && loadingOver === true) {
        order = orders.find((item:TOrder) => item.number === finallyId )
    }
    const date = (order) ? getOrderDate(order) : null;
    let total = 0;

    const status: string = (order && (order.status === 'done')) ?
        'Выполнен': (order && (order.status === 'pending')) ?
            'Создан'
            : (order && (order.status === 'created')) ?
                'Готовится'
                : 'Отменён';

    return (loadingOver ? (<>
            { order  ? (
                <div className={styles.container}>
                    <p className={styles.center + " text text_type_digits-default"}>#{finallyId}</p>
                    <p className="text text_type_main-medium">{order.name}</p>
                    <p className={styles.done + ' text text_type_main-default'}>{status}</p>
                    <p className="text text_type_main-medium mt-5 mb-3">Состав:</p>
                    <ul className={styles.list}>
                        {order.ingredients.map((item: string, index: number) => {
                            const ingredient = (items != null) && items.find((product:IIngridient) => product._id === item);
                            if (ingredient) {
                                const price = ingredient.price;
                                const image = ingredient.image_large;
                                const name = ingredient.name;
                                total += price;
                                return (
                                    <li className={styles.list_item} key={index}>
                                        <div className={styles.about}>
                                            <div className={styles.img_item} style={{zIndex: 6}}>
                                                <img src={image} alt={name}/>
                                            </div>
                                            <p className="text text_type_main-default">{name}</p>
                                        </div>
                                        <div className={styles.price}>
                                            <span className="text text_type_digits-default">{price}</span>
                                            <CurrencyIcon type='primary'/>
                                        </div>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                    <div className={styles.footer + ' mt-4'}>
                        <p className="text text_type_main-default text_color_inactive">{date}</p>
                        <p className={styles.price}>
                            <span className="text text_type_digits-default mr-2">{total}</span>
                            <CurrencyIcon type='primary'/>
                        </p>
                    </div>


                </div>
            ) : (
                <h1>Такого номера заказа не существует</h1>
            )
            }
        </>
        ) : (
            <h1>Поиск заказа</h1>
        )

    );
};

export default FeedDetails;