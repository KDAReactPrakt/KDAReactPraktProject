import React, {FC, useCallback, useEffect} from "react";
import {useDispatch} from "../../types/hooks";
import {useSelector} from "../../types/hooks";
import styles from "./Orders.module.css"
import {TOrder} from "../../types/wsData";
import {OrderItem} from "./OrderItem/OrderItem";
import {
    CLEAR_CURRENT_ORDER_NUMBER,
    GET_CURRENT_ORDER_NUMBER
} from "../../services/constants/currentItem";
import Modal from "../../components/Modal/Modal";
import {FeedId} from "../FeedId/FeedId";
import {WS_CONNECTION_CLOSED_USER, WS_CONNECTION_START_USER} from "../../services/constants/wsConnectionUser";
import {RootState} from "../../types/main";

export const  Orders:FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START_USER });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED_USER });
        };
    }, [dispatch]);

    const orders = useSelector((store:RootState)=> store.wsConnectionUser.data.orders);
    //@ts-ignore Я вообще не понимаю почему могут некоторые типы state/store определятся как "never" а другие норм. Заданы они все одинакого
    const activeModal = useSelector((store:RootState) => store.currentItemToModal.currentOrderNumber)
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
        window.history.pushState(null,'','/profile/order/' + number);
    },[])


    return(
        <div className={styles.mainBlock}>
            {activeModal && (
                <Modal title="Детали ингредиента" close={closeModal}>
                    <FeedId/>
                </Modal>
            )}
            {orders.map((item:TOrder)=>(
                    <OrderItem key={item._id} elem={item} onClick={setOrderNumber}/>
                ))}
        </div>
    );
}