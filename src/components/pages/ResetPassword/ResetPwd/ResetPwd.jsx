import React, {useCallback} from "react";
import style from '../../Login/Login/Login.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import {acceptResetPwd} from "../../../../functions/acceptResetPwd";

const ResetPwd = () => {
    const [code, setCode] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [pwd, setPwd] = React.useState('');
    const [pwdStatus, setPwdStatus] = React.useState(true);
    const codeRef = React.useRef(null);
    const pwdRef = React.useRef(null);
    const onPwdClick = () => {
        setTimeout(() => pwdRef.current.focus(), 0)
        setPwdStatus(!pwdStatus);
    }
    const history = useHistory();
    const redirectToPath = useCallback(
        (path) => {
            history.replace({pathname: path});
        },
        [history]
    );

    const reset = useCallback((pwd, code) => {
        setLoading(true)
        acceptResetPwd(pwd, code )
            .then(res => res ? redirectToPath('/login') : alert("Попробуйте снова"))
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
                    type={ pwdStatus ? 'password' : 'text' }
                    placeholder={'Пароль'}
                    onChange={e => setPwd(e.target.value)}
                    icon={ pwdStatus ? 'ShowIcon' : 'HideIcon' }
                    value={pwd}
                    name={'name'}
                    error={false}
                    ref={pwdRef}
                    onIconClick={onPwdClick}
                    errorText={'Ошибка'}
                    size={'default'}
                />
            </div>
            <div className={style.elem}>
                <Input
                    type={'text'}
                    placeholder={'Введите код из письма'}
                    onChange={e => setCode(e.target.value)}
                    value={code}
                    name={'name'}
                    error={false}
                    ref={codeRef}
                    errorText={'Ошибка'}
                    size={'default'}
                />
            </div>
            <div>
                <Button type="primary" size="large" onClick={!loading ? () => reset(pwd, code) : () => {}}>
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

export default ResetPwd;