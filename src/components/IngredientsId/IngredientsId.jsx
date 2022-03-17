import {useCallback, useEffect} from "react";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {useDispatch, useSelector} from "react-redux";
import {useRouteMatch} from "react-router-dom";
import {CLEAR_CURRENT_ITEM, GET_CURRENT_ITEM} from "../../services/actions/currentItem";

const IngredientsId = () => {
    const data = useSelector(state => state.ingredients.ingredientsData);
    const id = useRouteMatch().params.id;
    const dispatch = useDispatch();

    const setCurrentItem = useCallback(() => {
        const index = data.findIndex((elem => elem._id === id))
        dispatch({
            type: GET_CURRENT_ITEM,
            data: data[index]
        })
    },[data,dispatch, id])

    useEffect( ()=> {
        setCurrentItem();
        return () => {
            dispatch({
                type: CLEAR_CURRENT_ITEM
            })
        }
    },[dispatch, setCurrentItem]);

    return (
        <IngredientDetails/>
    )
}

export default IngredientsId