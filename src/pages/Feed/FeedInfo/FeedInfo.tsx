import {FC} from "react";
import styles from './FeedInfo.module.css'
import {TOrdersStatuses} from "../../../types/wsData";

interface IFeedInfo {
    readonly completeToday?: number;
    readonly completeAll?: number;
    readonly statuses: TOrdersStatuses
}

export const FeedInfo: FC<IFeedInfo> = (props) => {
    const {completeToday, completeAll, statuses} = props;
    let countDone = 5;
    let countInProgress = 5;
    return (
        <div>
            <div className={styles.orders_info}>
                <div className={styles.orders_info_block}>
                    <h2>
                        Готовы
                    </h2>
                    {statuses.done.map((item, index) => {
                        if (countDone === 0) return;
                        countDone--;
                        return (
                            <p key={index} className="text text_type_digits-default mt-2">{item}</p>
                        );
                    })}
                </div>
                <div className={styles.orders_info_block}>
                    <h2>
                        В работе
                    </h2>
                    {statuses.created.map((item, index) => {
                        if (countInProgress === 0) return;
                        countInProgress--;
                        return (
                            <p key={index} className="text text_type_digits-default mt-2">{item}</p>
                        );
                    })}
                </div>
            </div>
            <p className="text text_type_main-medium mt-15">Выполнено за все время:</p>
            <p className={styles.ts + " text text_type_digits-large"}>{completeAll}</p>
            <p className="text text_type_main-medium mt-15">Выполнено за сегодня:</p>
            <p className={styles.ts + " text text_type_digits-large"}>{completeToday}</p>
        </div>
    )
}