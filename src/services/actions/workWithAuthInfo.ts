import {checkResponse} from "../../functions/checkResponse";
import {PROFILE_URL} from "../../data/data";
import {
    CHANGE_USER_INFO, CHANGE_USER_INFO_FAILED, CHANGE_USER_INFO_SUCCESS,
    GET_LOGIN_INFO,
    GET_LOGIN_INFO_FAILED,
    GET_LOGIN_INFO_SUCCESS,
    GET_LOGOUT_INFO,
    GET_LOGOUT_INFO_FAILED,
    GET_LOGOUT_INFO_SUCCESS,
    GET_REGISTRATION_INFO,
    GET_REGISTRATION_INFO_FAILED,
    GET_REGISTRATION_INFO_SUCCESS, GET_USER_INFO, GET_USER_INFO_FAILED, GET_USER_INFO_SUCCESS,
} from "../constants/profile";
import {setCookie, getCookie, deleteCookie} from "../../functions/cookies";
import {IUser} from "../../types/user";
import {AppDispatch, AppThunk} from "../../types/main";

//Рыба для пост запроса. Параметры data - объект с данными, path - хвост для ссылки
const makeRequest = async (data:IUser, path:string) => {
    return await fetch(PROFILE_URL + path, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
}

//Рыба для запроса на авторизацию. Параметры data - объект с данными, path - хвост для ссылки
const makeAuthRequest = async (data:IUser = {} as IUser, path:string, type:string = 'POST') => {
    return await fetch(PROFILE_URL + path, {
        method: type,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            // Отправляем токен и схему авторизации в заголовке при запросе данных
            Authorization: 'Bearer ' + getCookie('token')
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
}

//Рыба для GET запроса на авторизацию. Параметры data - объект с данными, path - хвост для ссылки
const makeGETAuthRequest = async (path:string) => {
    return await fetch(PROFILE_URL + path, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            // Отправляем токен и схему авторизации в заголовке при запросе данных
            Authorization: 'Bearer ' + getCookie('token')
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    })
}


//Сохраняет токен в куки/сторадж. Параметры data - ответ сервера
const makeAuthToken = (data: any) => {
    let authToken = data;
    let result ={};

    if (authToken.indexOf('Bearer') === 0) {
        authToken = authToken.split('Bearer ')[1];
    }

    if (authToken) {
        setCookie('token', authToken, { expires: 15 * 60 });
    }
    return result;
}

//Производит авторизацию клиента на сервере. Параметры data - данные для пост запроса
export const logIn :AppThunk = (data:{email:string, password:string}) => {
    return async function (dispatch:AppDispatch) {
        dispatch({
            type: GET_LOGIN_INFO
        })
        await makeRequest(data, 'auth/login')
            .then(checkResponse)
            .then(res => {
                makeAuthToken(res.accessToken);
                localStorage.setItem('refreshToken',res.refreshToken);
                dispatch({
                    type: GET_LOGIN_INFO_SUCCESS,
                    data: res
                })
            })
            .catch( e => {
                e ? alert(e) : alert("Произошла ошибка");
                dispatch({
                    type: GET_LOGIN_INFO_FAILED
                })
            } )
    }
};

//Регистрирует нового пользователя на сервере. Параметры data - данные для пост запроса
export const registerNewUser : AppThunk = (data:IUser) => {
    return async function (dispatch:AppDispatch) {
        dispatch({
            type: GET_REGISTRATION_INFO
        })
        await makeRequest(data, 'auth/register')
            .then(checkResponse)
            .then(res => {
                makeAuthToken(res.accessToken);
                localStorage.setItem('refreshToken',res.refreshToken);
                dispatch({
                    type: GET_REGISTRATION_INFO_SUCCESS,
                    data: res.user
                });
            })
            .catch( e => {
                e ? alert(e) : alert("Произошла ошибка");
                dispatch({
                    type: GET_REGISTRATION_INFO_FAILED
                })
            } )
    }
}

//Обнуляет сессионные данные пользователя на сервере. Параметры data - данные для пост запроса
export const logOut : AppThunk = () => {
    return async function (dispatch:AppDispatch) {
        dispatch({
            type: GET_LOGOUT_INFO
        })
        await makeAuthRequest( { token: localStorage.getItem('refreshToken') }, 'auth/logout')
            .then(checkResponse)
            .then(() => {
                deleteCookie('token')
                dispatch({
                    type: GET_LOGOUT_INFO_SUCCESS
                });
                localStorage.clear()
            })
            .catch(e => {
                e ? alert(e) : alert("Произошла ошибка");
                dispatch({
                    type: GET_LOGOUT_INFO_FAILED
                })
            })
    }
}

//Необходим для обновления пользовательского токена в случае если старый истек
export const refreshToken = async () => {
    await makeRequest({ token: localStorage.getItem('refreshToken') }, 'auth/token')
        .then(checkResponse)
        .then(res => {
            makeAuthToken(res.accessToken);
            localStorage.setItem('refreshToken',res.refreshToken)
        })
        .catch(e => {
            e ? console.log(e) : console.log("Произошла ошибка")
        })
}

//ПОлучаем информацию о пользователе
export const getUserInfo : AppThunk = () => {
    return async function (dispatch:AppDispatch) {
        dispatch({
            type: GET_USER_INFO
        })
        await makeGETAuthRequest( 'auth/user')
            .then(checkResponse)
            .then(res => {
                dispatch({
                    type: GET_USER_INFO_SUCCESS,
                    data: res.user
                })
            })
            .catch( e => {
                e ? alert(e) : alert("Не удалось получить данные пользователя");
                dispatch({
                    type: GET_USER_INFO_FAILED
                })
            } )
    }
}

//Изменяет данные пользователя
export const changeUserInfo: AppThunk = (data: IUser) => {
    return async function (dispatch:AppDispatch) {
        dispatch({
            type: CHANGE_USER_INFO
        })
        await makeAuthRequest(data, 'auth/user', 'PATCH')
            .then(checkResponse)
            .then(res => {
                dispatch({
                    type: CHANGE_USER_INFO_SUCCESS,
                    data: res.user
                })
            })
            .catch( e => {
                e ? alert(e) : alert("Произошла ошибка");
                console.log(e);
                dispatch({
                    type: CHANGE_USER_INFO_FAILED
                })
            } )
    }
}
