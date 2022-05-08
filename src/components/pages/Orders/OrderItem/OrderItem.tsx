import {FC} from "react";
import styles from "./OrderItem.module.css"
import {IFeedItem} from "../../../../types/wsData";
import {getOrderDate} from "../../../../functions/getDateToOrder";
import {OrderIcons} from "../../OrderIcons/OrderIcons";

export const  OrderItem:FC<IFeedItem> = (props) => {
    const {elem, onClick} = props;
    const status: string = (elem && (elem.status === 'done')) ?
        'Выполнен': (elem && (elem.status === 'pending')) ?
            'Создан'
            : (elem && (elem.status === 'created')) ?
                'Готовится'
                : 'Отменён';
    return (
        <div className={styles.item_block} onClick={()=> onClick ? onClick(elem.number) : null}>
            <div className={styles.top}>
                <div>
                    <p className="text text_type_digits-default">#{elem.number}</p>
                </div>
                <div>
                    <p className="text text_type_main-default">{getOrderDate(elem)}</p>
                </div>
            </div>
            <div className={styles.name}>
                <h2 className="text text_type_main-medium mt-6">{elem.name}</h2>
            </div>
            <div className={styles.status}>
                {status}
            </div>
            <div className={styles.footer}>
                <OrderIcons elem={elem}/>
            </div>
        </div>
    );
}