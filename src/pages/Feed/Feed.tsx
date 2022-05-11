import React, {FC, useCallback, useEffect, useMemo} from "react";
import style from '../../components/App/App.module.css'
import {FeedInfo} from "./FeedInfo/FeedInfo";
import {FeedItem} from "./FeedItem/FeedItem";
import own_style from './Feed.module.css'
import {useDispatch} from "../../types/hooks";
import {useSelector} from "../../types/hooks";
import {TOrder, TOrdersStatuses} from "../../types/wsData";
import {CLEAR_CURRENT_ORDER_NUMBER, GET_CURRENT_ORDER_NUMBER} from "../../services/constants/currentItem";
import Modal from "../../components/Modal/Modal";
import {FeedId} from "../FeedId/FeedId";
import {WS_CONNECTION_CLOSED, WS_CONNECTION_START} from "../../services/constants/wsConnection";

export const  Feed:FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED });
        };
    }, [dispatch]);

    const orders = useSelector((store)=> store.wsConnection.data.orders);
    const completeToday = useSelector((store)=> store.wsConnection.data.totalToday);
    const completeAll = useSelector((store)=> store.wsConnection.data.total);

    const activeModal = useSelector((store) => store.currentItemToModal.activeModal)

    const ordersStatuses: TOrdersStatuses = useMemo(() => {
        let orderStatuses : TOrdersStatuses  = {
            created: [],
            pending: [],
            done:[]
        };
        if(orders.length > 0  ) {
            orders.map((order : TOrder) => {
                if (order.status === 'created') orderStatuses.created = [...orderStatuses.created, order.number];
                else if (order.status === 'pending') orderStatuses.pending = [...orderStatuses.pending, order.number];
                else orderStatuses.done = [...orderStatuses.done, order.number];
            })
        }

        return orderStatuses;
    }, [orders]);

    const closeModal = useCallback(()=> {
        window.history.pushState(null,'','/');
        dispatch({
            type: CLEAR_CURRENT_ORDER_NUMBER
        })
    },[window.history]);

    const setOrderNumber = useCallback((number)=>{
        dispatch({
            type: GET_CURRENT_ORDER_NUMBER,
            data: number
        })
        window.history.pushState(null,'','/feed/' + number);
    },[])

    return (
        <div>
            <main>
                {activeModal && (
                    <Modal title="Детали ингредиента" close={closeModal}>
                        <FeedId/>
                    </Modal>
                )}
                <h1 className="text text_type_main-large">Лента заказов</h1>
                <div className={style.Wrapper}>
                    <section className={own_style.column}>
                        {orders.map((elem:TOrder)=>{
                            return (<FeedItem key={elem._id} elem={elem} onClick={setOrderNumber}/>)
                        })}
                    </section>
                    <section className={style.mainContentBlock}>
                        <FeedInfo completeAll={completeAll} completeToday={completeToday} statuses={ordersStatuses}/>
                    </section>
                </div>
            </main>
        </div>
    )
}