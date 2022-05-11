import React, {SyntheticEvent, useCallback, useEffect} from "react";
import style from '../../Login/Login/Login.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "../../../types/hooks";
import {registerNewUser} from "../../../services/actions/workWithAuthInfo";
import {TCallbackSV} from "../../../types/callback";

const Register = () => {
    const [email, setEmail] = React.useState<string>('');
    const [pwd, setPwd] = React.useState<string>('');
    const [name, setName] = React.useState<string>('');
    const [pwdStatus,setPwdStatus] = React.useState<boolean>(true);
    const dispatch = useDispatch();
    const needToRedirect = useSelector((store) => store.profile.registerSuccess)
    const onPwdClick = () => {
        setPwdStatus(!pwdStatus);
    }
    const history = useHistory();
    const redirectToPath = useCallback<TCallbackSV>(
        (path) => {
            history.replace({pathname: path});
        },
        [history]
    );

    useEffect(() => {
        needToRedirect && redirectToPath('/')
    }, [needToRedirect])


    const register = useCallback((e:SyntheticEvent) => {
        e.preventDefault();
        let form = {
            email: email,
            password: pwd,
            name: name
        };
        dispatch(registerNewUser(form));
        alert('Регистрация прошла успешно!');
    },[email, pwd, name])

    return (
        <form onSubmit={register}>
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
                <div className={style.button}>
                    <Button type="primary" size="large">
                        Зарегистрироваться
                    </Button>
                </div>
                <div className={style.infoBlock}>
                    <p className="text text_type_main-small">
                        Уже зарегистрированы? <Link to="/login">Войти</Link>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default Register;