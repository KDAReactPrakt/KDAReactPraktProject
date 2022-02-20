import {
    GET_ORDER_NUMBER,
    GET_ORDER_NUMBER_FAILED,
    GET_ORDER_NUMBER_SUCCESS
} from '../services/actions/orderNumber';
import {URL} from '../data/data'

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
        }).then(res => {
            if (!res.ok) {
                alert("Произошла ошибка при загрузке данных");
                dispatch({
                    type: GET_ORDER_NUMBER_FAILED
                })
            }
            return res.json();
        })
            .then(res => {
                dispatch({
                    type: GET_ORDER_NUMBER_SUCCESS,
                    data: res.order.number
                })

            }).catch(() => {
            alert("Произошла Непредвиденная ошибка");
            dispatch({
                type: GET_ORDER_NUMBER_FAILED
            })
        })
    }
}
