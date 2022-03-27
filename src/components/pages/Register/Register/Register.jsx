import React, {useCallback, useEffect} from "react";
import style from '../../Login/Login/Login.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {registerNewUser} from "../../../../services/actions/workWithAuthInfo";

const Register = () => {
    const [email, setEmail] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [name, setName] = React.useState('');
    const [pwdStatus,setPwdStatus] = React.useState(true);
    const emailRef = React.useRef(null);
    const pwdRef = React.useRef(null);
    const nameRef = React.useRef(null);
    const dispatch = useDispatch();
    const needToRedirect = useSelector(store => store.profile.registerSuccess)
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

    useEffect(() => {
        needToRedirect && redirectToPath('/')
    }, [needToRedirect])


    const register = () => {
        let form = {
            email: email,
            password: pwd,
            name: name
        };
        dispatch(registerNewUser(form));
        alert('ok');
    }
    return (
        <div className={style.mainBlock}>
            <h1>
                <p className="text text_type_main-medium">
                    Регистрация
                </p>
            </h1>
            <div className={style.elem}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    onChange={e => setName(e.target.value)}
                    value={name}
                    name={'name'}
                    error={false}
                    ref={nameRef}
                    errorText={'Ошибка'}
                    size={'default'}
                />
            </div>
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
            <div className={style.button}>
                <Button type="primary" size="large" onClick={register}>
                    Зарегистрироваться
                </Button>
            </div>
            <div className={style.infoBlock}>
                <p className="text text_type_main-small">
                    Уже зарегистрированы? <Link to="/login">Войти</Link>
                </p>
            </div>
        </div>
    )
}

export default Register;