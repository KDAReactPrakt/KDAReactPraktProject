import React from "react";
import style from './IngredientDetails.module.css'
import {useSelector} from "react-redux";

const IngredientDetails = () => {
    const data = useSelector( (state: any) => state.currentItem.currentItem)
    return (
        <div className={style.infoBlock}>
            <div className={style.image}>
                <img src={data.image_large} alt={data.name}/>
            </div>
            <div className={style.name}>
                <p className="text text_type_main-medium">
                    {data.name}
                </p>
            </div>
            <div className={style.properties}>
                <section className={style.propertiesBlock}>
                    <p className="text text_type_main-small">
                        Калории, ккал
                    </p>
                    <p className="text text_type_digits-default">{data.calories}</p>
                </section>
                <section className={style.propertiesBlock}>
                    <p className="text text_type_main-small">
                        Белки, г
                    </p>
                    <p className="text text_type_digits-default">{data.carbohydrates}</p>
                </section>
                <section className={style.propertiesBlock}>
                    <p className="text text_type_main-small">
                        Жиры, г
                    </p>
                    <p className="text text_type_digits-default">{data.fat}</p>
                </section>
                <section className={style.propertiesBlock}>
                    <p className="text text_type_main-small">
                        Углеводы, г
                    </p>
                    <p className="text text_type_digits-default">{data.proteins}</p>
                </section>
            </div>
        </div>
    )
}

export default IngredientDetails