//Проверяет ответ сервера на ошибку
import {refreshToken} from "../services/actions/workWithAuthInfo";

export const  checkResponse = (res) => {
    if (!res.ok) {
        if(res.status === 403) {
            refreshToken().catch(()=> alert("Не удалось освежить токен"));
        } else {
            throw "Произошла ошибка при загрузке данных"
        }
    }
    return res.json();
}