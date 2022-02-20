import {
    GET_INGREDIENT,
    GET_INGREDIENT_FAILED,
    GET_INGREDIENT_SUCCESS
} from '../services/actions/ingredient';
import {URL} from '../data/data'
import ingredientsMap from "./ingredientsMap";

//getIngredientData - получаем данные по ингредиентам из Api для REDUX
export function getIngredientData() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENT
        })
        // Запрашиваем данные у сервера
        fetch(URL + 'ingredients').then(res => {
            if (!res.ok) {
                alert("Произошла ошибка при загрузке данных");
                dispatch({
                    type: GET_INGREDIENT_FAILED
                })
            }
            return res.json();
        })
            .then(res => {
                dispatch({
                    type: GET_INGREDIENT_SUCCESS,
                    data: ingredientsMap(res.data)
                })

            }).catch(() => {
            alert("Произошла Непредвиденная ошибка");
            dispatch({
                type: GET_INGREDIENT_FAILED
            })
        })
    }
}
