import {PROFILE_URL} from "../data/data";
import {checkResponse} from "./checkResponse";

export const  acceptResetPwd = async (pwd, token) => {
    return await fetch(PROFILE_URL + 'password-reset/reset', {
        method: 'POST',
        body: {
            password: pwd,
            token: token
        }
    }).then(checkResponse)
        .then(res => res.message === "Password successfully reset")
        .catch((err) => {
            alert(err ? err : "Произошла Непредвиденная ошибка");
            return false;
        })
}