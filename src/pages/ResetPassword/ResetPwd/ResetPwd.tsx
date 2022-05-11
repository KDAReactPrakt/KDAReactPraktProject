import React, {SyntheticEvent, useCallback} from "react";
import style from '../../Login/Login/Login.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import {acceptResetPwd} from "../../../functions/acceptResetPwd";
import {TCallbackSV, TCallbackVV} from "../../../types/callback";

const ResetPwd = () => {
    const [code, setCode] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const [pwd, setPwd] = React.useState<string>('');
    const [pwdStatus, setPwdStatus] = React.useState<boolean>(true);
    const onPwdClick = useCallback<TCallbackVV>(() => {
        setPwdStatus(!pwdStatus);
    },[pwdStatus])
    const history = useHistory();
    const redirectToPath = useCallback<TCallbackSV>(
        (path) => {
            history.replace({pathname: path});
        },
        [history]
    );

    const reset = useCallback((e:SyntheticEvent) => {
        e.preventDefault();
        setLoading(true)
        acceptResetPwd(pwd, code )
            .then(res => res ? redirectToPath('/login') : alert("Попробуйте снова"))
            .then(() => setLoading(false));
    },[pwd, code]);

    return (
        <form onSubmit={!loading ? reset : () => {
        }}>
            <div className={style.mainBlock}>
                <h1>
                    <p className="text text_type_main-medium">
                        Восстановление пароля
                    </p>
                </h1>

                <div className={style.elem}>
                    <Input
                        type={pwdStatus ? 'password' : 'text'}
                        placeholder={'Пароль'}
                        onChange={e => setPwd(e.target.value)}
                        icon={pwdStatus ? 'ShowIcon' : 'HideIcon'}
                        value={pwd}
                        name={'name'}
                        error={false}
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

export default ResetPwd;