import React, {FC} from "react";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IIngridient} from "../../../types/Ingredient";
import {useDrag} from "react-dnd";
import {useSelector} from "../../../types/hooks";

interface IProps {
    onClick: (setActiveIngredientId: string) => void;
    item: IIngridient;
    classProps: string;
}


const ItemCard: FC<IProps> = (props) => {
    const {onClick, item, classProps } = props
    const [{opacity}, ref] = useDrag({
        type: 'item',
        item: item,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });
    //@ts-ignore Я вообще не понимаю почему могут некоторые типы state/store определятся как "never" а другие норм. Заданы они все одинакого
    const chosenBun = useSelector(state => state.constructorOrder.chosenBun)

    const count = item.type === 'bun' ? (item._id === chosenBun._id ? 2 : 0) : item.count;


    return (
        <div className={classProps} onClick={() => onClick(item._id)} draggable ref={ref}
             style={{opacity}}>
            {count !== 0 && (<Counter count={count || 0}/>)}
            <img alt={item.name} src={item.image_large}/>
            <section>
                <p className="text text_type_digits-default">
                    {item.fat} &nbsp;
                </p>
                <CurrencyIcon type="primary"/>
            </section>
            <p className="text text_type_main-default">
                {item.name}
            </p>
        </div>)
}


// ItemCard.propTypes = {
//     item: ingredientType.isRequired,
//     class: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
// }

export default ItemCard;