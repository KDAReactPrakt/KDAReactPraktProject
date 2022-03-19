import React, {useMemo} from "react";
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './BurgerConstructor.module.css'
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import {useDispatch, useSelector} from "react-redux";
import {getOrderNumberAPI} from "../../services/actions/getOrderNumberAPI";
import {CLEAR_ORDER_NUMBER} from "../../services/actions/orderNumber";
import {useDrop} from "react-dnd";
import {
    CHANGE_POSITION, CLEAR_BASKET,
    DROP_HOVER_POSITION,
    DROP_ITEM,
    SET_BUN,
    SET_HOVER_POSITION,
    SET_ITEM
} from "../../services/actions/constructor";
import {CLEAR_COUNT, DECREASE_ITEM_COUNT, INCREASE_ITEM_COUNT} from "../../services/actions/ingredient";
import ChosenItems from "./ChosenItems/ChosenItems";
import { v4 as uuidv4 } from 'uuid';
import {getCookie} from "../../functions/cookies";
import {Redirect, useHistory} from "react-router-dom";


const BurgerConstructor = () => {
    const [needToRedirect, setNeedToRedirect] = React.useState(false);
    const bun = useSelector(state => state.constructorOrder.chosenBun);
    const chosenItems = useSelector(state => state.constructorOrder.chosenItems);
    const orderNumber = useSelector(state => state.orderNumber.orderNumber);
    const loadingComplete = useSelector(state => state.orderNumber.orderNumberSuccess);
    const dispatch = useDispatch();
    const history = useHistory();
    const hoverPosition = useSelector(state => state.constructorOrder.hoverBoundingRect)

    const [{opacity}, dropTarget] = useDrop({
        accept: "item",
        drop(item) {
            onDropHandler(item)
        },
        collect: monitor => ({
            opacity: monitor.isOver() ? 0.5 : 1
        })
    });

    const [, dropTargetSort] = useDrop({
        accept: "chosenItem",
        drop() {
            dispatch({
                type: DROP_HOVER_POSITION,
                position: 0
            })
        },
        hover(item, monitor) {
            if (hoverPosition === 0) {
                dispatch({
                    type: SET_HOVER_POSITION,
                    position: item.ref.current.getBoundingClientRect().top
                })
            }
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverPosition
            const changePosition = Math.floor(hoverClientY/80)
            if (changePosition!==0){
                dispatch({
                    type: CHANGE_POSITION,
                    id: item.chosenItemId,
                    difference: changePosition,
                });
                dispatch(
                    dispatch({
                        type: SET_HOVER_POSITION,
                        position: hoverPosition + changePosition * 80
                    })
                )
            }
        }
    });

    const onDropHandler = (item) => {
        if (item.type === 'bun') {
            dispatch({
                type: SET_BUN,
                data: item
            })
        } else {
            dispatch({
                type: INCREASE_ITEM_COUNT,
                id : item._id
            })
            item.uid = uuidv4();
            dispatch({
                type: SET_ITEM,
                data: item
            });
        }
    }

    const dropItem = (itemId) => {
        dispatch({
            type: DECREASE_ITEM_COUNT,
            id: itemId
        })
        dispatch({
            type: DROP_ITEM,
            id: itemId
        })
    }

    const closeModal = () => {
        dispatch({
            type: CLEAR_ORDER_NUMBER
        });
        dispatch({
            type: CLEAR_BASKET
        })
        dispatch({
            type: CLEAR_COUNT
        })
    }

    const getSum = () => {
        const bunSum = bun.price === undefined ? 0 : bun.price*2;
        const chosenItemsSum = chosenItems.length !== 0 ? chosenItems.reduce(function(sum, current) {
                return current!== undefined ? sum + current.price : sum;
            },0) : 0
        return bunSum + chosenItemsSum;
    }
    const sum = useMemo(() =>getSum(), [bun, chosenItems])

    const getOrderNumber = () => {
        let result = {
            ingredients: []
        };
        if(bun._id !== undefined) {
            result.ingredients.push(bun._id);
        } else {
            alert("Без булки сделать заказ нельзя!");
            return;
        }
        chosenItems.map((item) => result.ingredients.push(item._id));
        result.ingredients.push(bun._id);

        dispatch(getOrderNumberAPI(result));
    }

    const openModal = () => {
        if (getCookie('token') === undefined) {
            setNeedToRedirect(true);
        }else {
            getOrderNumber();
        }
    }

    return needToRedirect ? (
        <Redirect to={{
            // Маршрут, на который произойдёт переадресация
            pathname: '/login',
            // В from сохраним текущий маршрут
            state: { from: history.location.pathname }
        }}/>
    ) : (
        <div>
            {orderNumber !== 0 && loadingComplete && (
                <Modal close={closeModal}>
                    <OrderDetails number={orderNumber}/>
                </Modal>
            )}
            <div className={style.constructor} ref={dropTarget} style={{opacity}}>
                {bun.name === undefined && chosenItems.length === 0 && (
                    <div>
                        <p className="text text_type_main-large">
                            Перенесите сюда ингредиенты заказа
                        </p>
                    </div>
                )}
                {bun.name !== undefined && (
                    <div className={style.item}>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={bun.name + ' (верх)'}
                            price={bun.price}
                            thumbnail={bun.image_mobile}
                        />
                    </div>
                )}
                {chosenItems.length !== 0 && (
                    <div className={style.middleBlock} ref={dropTargetSort}>
                        {chosenItems.map((item) => (
                            <ChosenItems  key={item.uid} item={item} dropItem={dropItem}/>
                        ))}
                    </div>
                )}
                {bun.name !== undefined && (
                    <div className={style.item}>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={bun.name + ' (низ)'}
                            price={bun.price}
                            thumbnail={bun.image_mobile}
                        />
                    </div>
                )}
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
