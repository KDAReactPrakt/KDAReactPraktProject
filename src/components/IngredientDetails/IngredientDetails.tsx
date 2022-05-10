import React from "react";
import style from './IngredientDetails.module.css'
import {useSelector} from "../../types/hooks";
import {RootState} from "../../types/main";

const IngredientDetails = () => {
    //@ts-ignore Я вообще не понимаю почему могут некоторые типы state/store определятся как "never" а другие норм. Заданы они все одинакого
    const data = useSelector( (state:RootState) => state.currentItemToModal.currentItem)
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