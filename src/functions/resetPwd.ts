import {PROFILE_URL} from "../data/data";
import {checkResponse} from "./checkResponse";

export const  resetPwd = async (email: {email:string}) => {
    return await fetch(PROFILE_URL + 'password-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email)
    }).then(checkResponse)
        .then(res => res.message === "Reset email sent")
        .catch((err) => {
            alert(err ? err : "Произошла Непредвиденная ошибка");
            return false;
        })
}