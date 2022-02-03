import React from "react";
import style from './IngredientDetails.module.css'
import {ingredientType} from "../../types/Ingredient";

const IngredientDetails = (props) => {
    return (
        <div className={style.infoBlock}>
            <div className={style.image}>
                <img src={props.data.image_large} alt={props.data.name}/>
            </div>
            <div className={style.name}>
                <p className="text text_type_main-medium">
                    {props.data.name}
                </p>
            </div>
            <div className={style.properties}>
                <section className={style.propertiesBlock}>
                    <p className="text text_type_main-small">
                        Калории, ккал
                    </p>
                    <p className="text text_type_digits-default">{props.data.calories}</p>
                </section>
                <section className={style.propertiesBlock}>
                    <p className="text text_type_main-small">
                        Белки, г
                    </p>
                    <p className="text text_type_digits-default">{props.data.carbohydrates}</p>
                </section>
                <section className={style.propertiesBlock}>
                    <p className="text text_type_main-small">
                        Жиры, г
                    </p>
                    <p className="text text_type_digits-default">{props.data.fat}</p>
                </section>
                <section className={style.propertiesBlock}>
                    <p className="text text_type_main-small">
                        Углеводы, г
                    </p>
                    <p className="text text_type_digits-default">{props.data.proteins}</p>
                </section>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    data: ingredientType.isRequired
};

export default IngredientDetails