import {
    GET_ORDER_NUMBER,
    GET_ORDER_NUMBER_FAILED,
    GET_ORDER_NUMBER_SUCCESS
} from './orderNumber';
import {URL} from '../../data/data'
import {checkResponse} from "../../functions/checkResponse";

export function getOrderNumberAPI(post) {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_NUMBER
        })
        // Запрашиваем данные у сервера
        fetch(URL + 'orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(post)
        }).then(checkResponse)
            .then(res => {
                dispatch({
                    type: GET_ORDER_NUMBER_SUCCESS,
                    data: res.order.number
                })

            }).catch((err) => {
            alert(err ? err : "Произошла Непредвиденная ошибка");
            dispatch({
                type: GET_ORDER_NUMBER_FAILED
            })
        })
    }
}
