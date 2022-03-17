import React, {useCallback} from "react";
import style from '../Login/Login.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import {resetPwd} from "../../functions/resetPwd";

const ForgotPwd = () => {
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const emailRef = React.useRef(null);
    const history = useHistory();
    const redirectToPath = useCallback(
        (path) => {
            history.replace({pathname: path});
        },
        [history]
    );

    const next = useCallback(() => {
        setLoading(true)
        resetPwd(email)
            .then(res => res ? redirectToPath('/reset-password') : alert("Попробуйте снова"))
            .then(() => setLoading(false));
    },[]);

    return (
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
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name={'name'}
                    error={false}
                    ref={emailRef}
                    errorText={'Ошибка'}
                    size={'default'}
                />
            </div>
            <div>
                <Button type="primary" size="large" onClick={!loading ? next : ()=>{}}>
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