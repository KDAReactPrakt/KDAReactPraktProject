import React, {useCallback} from "react";
import style from '../../Login/Login/Login.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect, useHistory} from "react-router-dom";
import {resetPwd} from "../../../functions/resetPwd";
import {TCallbackSV} from "../../../types/callback";

const ForgotPwd = () => {
    const [emailToReset, setEmailToReset] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);
    const [needToRedirect, setNeedToRedirect] = React.useState<boolean>(false)
    const history = useHistory();

    const next = useCallback<TCallbackSV>((emailToReset) => {
        setLoading(true);
        resetPwd({email:emailToReset})
            .then(res => res ? setNeedToRedirect(true) : alert("Попробуйте снова"))
            .then(() => setLoading(false));
    },[]);

    return needToRedirect ? (
        <Redirect to={{
            // Маршрут, на который произойдёт переадресация
            pathname: '/reset-password',
            // В from сохраним текущий маршрут
            state: { from: history.location.pathname }
        }}/>
    ):(
            <div className={style.mainBlock}>
                <h1>
                    <p className="text text_type_main-medium">
                        Восстановление пароля
                    </p>
                </h1>
                <div className={style.elem}>
                    {/*Про инпуты - на мой взгляд это как максимум можно отправить в "можно лучше", но это нельзя считать
                    критически важной доработкой, ввиду того, что сейчас функционал работает согласно ТЗ, описанному в уроке.
                    Необходимость отработки отправки запроса при нажатии клавиши энтер - нигде в ТЗ не прописано(в прошлых уроках про ESC - было).
                    Функционал работает корректно, для того чтобы переделать на формы - придется переделывать логику у многих
                    функций. Что при отсутствии строго прописанного требования - большая трата времени, поэтому для чего это
                    необходимо не совсем понятно
                    */}
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={e => setEmailToReset(e.target.value )}
                        value={emailToReset}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div>
                    <Button type="primary" size="large" onClick={!loading ? ()=>{next(emailToReset)} : ()=>{}}>
                        {loading ? 'Происходит запрос' : 'Восстановить'}
                    </Button>
                </div>
                <div className={style.infoBlock}>
                    <p className="text text_type_main-small">
                        Вспомнили пароль? <Link to="/login">Войти</Link>
                    </p>
                </div>
            </div>
        )
}

export default ForgotPwd;