import {useCallback, useEffect} from "react";
import IngredientDetails from "../../../IngredientDetails/IngredientDetails";
import {useDispatch, useSelector} from "../../../../types/hooks";
import {useRouteMatch} from "react-router-dom";
import {CLEAR_CURRENT_ITEM, GET_CURRENT_ITEM} from "../../../../services/constants/currentItem";
import {TCallbackVV} from "../../../../types/callback";
import {IIngridient} from "../../../../types/Ingredient";

interface IPath {
        id?: string
}

const IngredientsId = () => {
    const data = useSelector((state: any) => state.ingredients.ingredientsData);
    const id: IPath = useRouteMatch().params
    const dispatch = useDispatch();

    const setCurrentItem = useCallback<TCallbackVV>(() => {
        const index = data.findIndex(((elem:IIngridient) => elem._id === id.id))
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