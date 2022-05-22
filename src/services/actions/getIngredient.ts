import {
    GET_INGREDIENT,
    GET_INGREDIENT_FAILED,
    GET_INGREDIENT_SUCCESS
} from '../constants/ingredient';
import {PROFILE_URL} from '../../data/data'
import ingredientsMap from "../../functions/ingredientsMap";
import {checkResponse} from "../../functions/checkResponse";
import {AppDispatch, AppThunk} from "../../types/main";

//getIngredientData - получаем данные по ингредиентам из Api для REDUX
export const getIngredientData : AppThunk = () => {
    return function (dispatch:AppDispatch) {
        dispatch({
            type: GET_INGREDIENT
        })
        // Запрашиваем данные у сервера
        fetch(PROFILE_URL + 'ingredients').then(checkResponse)
            .then(res => {
                let result: any = ingredientsMap(res.data)
                dispatch({
                    type: GET_INGREDIENT_SUCCESS,
                    data: result
                })

            }).catch((err) => {
            alert(err ? err : "Произошла Непредвиденная ошибка");
            dispatch({
                type: GET_INGREDIENT_FAILED
            })
        })
    }
}
