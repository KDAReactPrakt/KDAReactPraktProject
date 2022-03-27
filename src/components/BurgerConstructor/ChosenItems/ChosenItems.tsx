import React, {useRef} from "react";
import style from "../BurgerConstructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag} from "react-dnd";
import {TChosenIngredients} from "../../../types/Ingredient";
import {FC} from "react";

interface IProps {
    dropItem: (itemId: string) => void;
    item: TChosenIngredients
}

const ChosenItems: FC<IProps> = (props) => {
    const {item, dropItem} = props
    const chosenItemId = item.uid;
    const ref = useRef(null);
    const [{opacity}, drag] = useDrag({
        type: 'chosenItem',
        item: {chosenItemId, ref},
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });
    drag(ref);

    return (
        <div className={style.middleItem} draggable style={{opacity}} ref={ref}>
            <section>
                <DragIcon type="primary"/>
            </section>
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image_mobile}
                handleClose={() => dropItem(item.uid)}
            />
        </div>
    )
}

export default ChosenItems