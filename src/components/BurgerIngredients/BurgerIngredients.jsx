import React from "react";
import style from './BurgerIngredients.module.css'
import data from './../../utils/data.json'
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import ItemCard from "./ItemCard/ItemCard";

const AddTab = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <div style={{ display: 'flex' }}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}

class BurgerIngredients extends React.Component {
    state = {
        data: data
    };

    render () {
        return (
            <div className={style.mainBlock}>
                <div className={style.nameBlock}>
                    <p className="text text_type_main-large">
                        Соберите бургер
                    </p>
                </div>
                <div className={style.tabBlock}>
                    <AddTab />
                </div>
                <div className={style.ingredientsBlock}>
                    <div className={style.ingredientsHeader}>
                        <p className="text text_type_main-medium">
                            Булки
                        </p>
                    </div>
                    {this.state.data.map((element) => (
                        element.type === 'bun' && (
                            <ItemCard key={element._id} item={element} class={style.ingredientsItem}/>)
                    ))}
                    <div className={style.ingredientsHeader}>
                        <p className="text text_type_main-medium">
                            Соусы
                        </p>
                    </div>
                    {this.state.data.map((element, index) => (
                        element.type === 'sauce' && (
                            <ItemCard key={index} item={element} class={style.ingredientsItem}/>)
                    ))}
                    <div className={style.ingredientsHeader}>
                        <p className="text text_type_main-medium">
                            Начинки
                        </p>
                    </div>
                    {this.state.data.map((element, index) => (
                        element.type === 'main' && (
                            <ItemCard key={index} item={element} class={style.ingredientsItem}/>)
                    ))}
                </div>

            </div>
        )
    };
}

export default BurgerIngredients;