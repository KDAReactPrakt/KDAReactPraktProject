import {FC} from "react";
import styles from "./OrderIcons.module.css";
import {IIngridient} from "../../types/Ingredient";
import {useSelector} from "../../types/hooks";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IFeedItem} from "../../types/wsData";

export const  OrderIcons:FC<IFeedItem> = (props) => {
    const {elem} = props;
    const data = useSelector( (state) => state.ingredients.ingredientsData);
    let price = 0;
    return (
        <div className={styles.main_block}>
            <div className={styles.icons}>
                {elem.ingredients.map((item : string, index : number) => {
                    const zIndex = 5 - index;
                    const ingredient = (data != null) && data.find((orderElem:IIngridient) => orderElem._id === item);
                    if (ingredient) {
                        price += ingredient.price;
                        const image = ingredient.image_large;
                        if (zIndex > 0) {
                            return (
                                <div className={styles.img_item} style={{ zIndex }} key={index}>
                                    <img src={image} alt={ingredient.name}/>
                                </div>
                            );
                        }
                        if (zIndex === 0) {
                            return (
                                <div className={styles.img_item_col} style={{ zIndex : 0 }} key={index}>
                                    <div className={styles.img_item_cola}>
                                        <img src={image} alt={ingredient.name}/>
                                    </div>
                                    <span className={styles.col + " text text_type_main-default"}>{`+${elem.ingredients.length - 6}`}</span>
                                </div>
                            );
                        }
                        else {
                            return null;
                        }
                    }
                })}
            </div>
            <div className={styles.price}>
                <span className="text text_type_digits-default mr-2">{price}</span>
                <CurrencyIcon type="primary"/>
            </div>
        </div>
    )
}