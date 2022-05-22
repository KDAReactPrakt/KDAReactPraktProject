import React, {SyntheticEvent, useCallback} from "react";
import style from '../../Login/Login/Login.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect, useHistory} from "react-router-dom";
import {resetPwd} from "../../../functions/resetPwd";

const ForgotPwd = () => {
    const [emailToReset, setEmailToReset] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);
    const [needToRedirect, setNeedToRedirect] = React.useState<boolean>(false)
    const history = useHistory();

    const next = useCallback((e:SyntheticEvent) => {
        e.preventDefault();
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
        <form onSubmit={!loading ? next : ()=>{}}>
            <div className={style.mainBlock}>
                <h1>
                    <p className="text text_type_main-medium">
                        Восстановление пароля
                    </p>
                </h1>

                <div className={style.elem}>
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
                    <Button type="primary" size="large">
                        {loading ? 'Происходит запрос' : 'Восстановить'}
                    </Button>
                </div>
                <div className={style.infoBlock}>
                    <p className="text text_type_main-small">
                        Вспомнили пароль? <Link to="/login">Войти</Link>
                    </p>
                </div>
            </div>
        </form>
        )
}

export default ForgotPwd;