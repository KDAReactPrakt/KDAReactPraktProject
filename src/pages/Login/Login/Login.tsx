import React from "react";
import style from './Login.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "../../../types/hooks";
import {logIn} from "../../../services/actions/workWithAuthInfo";
import {ILocation} from "../../../types/location";

const Login = () => {
    const [email, setEmail] = React.useState<string>('');
    const [pwd, setPwd] = React.useState<string>('');
    const [pwdStatus,setPwdStatus] = React.useState<boolean>(true);
    const needToRedirect = useSelector((store) => store.profile.loginInfoSuccess)
    const onPwdClick = () => {
        setPwdStatus(!pwdStatus);
    }
    const location = useLocation<ILocation>();
    const refer = location.state && location.state.from;
    const dispatch = useDispatch();
    const enter = () => {
        let form = {
            email: email,
            password: pwd
        };
        dispatch(logIn(form));
    }

    return needToRedirect === true ? (
        <Redirect to={refer}/>
    ) : (
            <div className={style.mainBlock}>
                <h1>
                    <p className="text text_type_main-medium">
                        Вход
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
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={style.elem}>
                    <Input
                        type={ pwdStatus ? 'password' : 'text' }
                        placeholder={'Пароль'}
                        onChange={e => setPwd(e.target.value)}
                        icon={ pwdStatus ? 'ShowIcon' : 'HideIcon' }
                        value={pwd}
                        name={'name'}
                        error={false}
                        onIconClick={onPwdClick}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div>
                    <Button type="primary" size="large" onClick={enter}>
                        Войти
                    </Button>
                </div>
                <div className={style.infoBlock}>
                    <p className="text text_type_main-small">
                        Вы новый пользователь? <Link to="/register">Зарегистрироваться</Link>
                    </p>
                    <p className="text text_type_main-small">
                        Забыли пароль? <Link to="/forgot-password">Восстановить пароль</Link>
                    </p>
                </div>
            </div>
        )

}

export default Login;