import {TOrder} from "../types/wsData";

//Получение человеческой даты для заказа
export const getOrderDate = (order: TOrder) => {
    if (order) {
        const date = new Date();
        const orderDate = new Date(order.createdAt);
        const hours = (orderDate.getHours() > 9) ? orderDate.getHours() : `0${orderDate.getHours()}`;
        const minutes = (orderDate.getMinutes() > 9) ? orderDate.getMinutes() : `0${orderDate.getMinutes()}`;
        const dateNum = Date.parse(date.toISOString().slice(0, 10));
        const orderDateNum = Date.parse(orderDate.toISOString().slice(0, 10));
        const day = (dateNum - orderDateNum === 0) ? 'Сегодня,'
            : (dateNum - orderDateNum) / 86400000 === 1 ? 'Вчера,' : `${(dateNum - orderDateNum) / 86400000} дня(ей) назад,`;
        return `${day} ${hours}:${minutes} i-GMT+${
            (orderDate.getTimezoneOffset() * -1) / 60
        }`;
    }
};