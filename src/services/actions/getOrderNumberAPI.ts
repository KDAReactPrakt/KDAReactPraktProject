import {
    GET_ORDER_NUMBER,
    GET_ORDER_NUMBER_FAILED,
    GET_ORDER_NUMBER_SUCCESS
} from '../constants/orderNumber';
import {PROFILE_URL} from '../../data/data'
import {checkResponse} from "../../functions/checkResponse";
import {IResult} from "../../components/BurgerConstructor/BurgerConstructor";
import {AppDispatch, AppThunk} from "../../types/main";
import {getCookie} from "../../functions/cookies";

export const getOrderNumberAPI : AppThunk = (post: IResult) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: GET_ORDER_NUMBER
        })
        // Запрашиваем данные у сервера
        fetch(PROFILE_URL + 'orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: 'Bearer ' + getCookie('token')
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
