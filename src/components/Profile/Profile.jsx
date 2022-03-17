import React, {useCallback, useEffect} from "react";
import style from './Profile.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useHistory} from "react-router-dom";
import {MENU_LINKS} from '../../data/data'
import {useDispatch, useSelector} from "react-redux";
import {changeUserInfo, getUserInfo, logOut} from "../../services/actions/workWithAuthInfo";

const Profile = () => {
    const [email, setEmail] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [name, setName] = React.useState('');
    const user = useSelector(store => store.profile.user)
    const emailRef = React.useRef(null);
    const pwdRef = React.useRef(null);
    const nameRef = React.useRef(null);
    const dispatch = useDispatch();

    const history = useHistory();
    const redirectToPath = useCallback(
        (path) => {
            history.replace({pathname: path});
        },
        [history]
    );

    useEffect(() => {
        if(!localStorage.getItem('refreshToken')){
            redirectToPath('/login');
        } else {
            // debugger;
            if (user !== {}) {
                dispatch(getUserInfo()).then(setEmail(user.email)).then(setName(user.name));
            }
        }
    }, [user])


    const save = () => {
        let form = {
            email: email,
            name: name
        }
        dispatch(changeUserInfo(form))
    }

    const onClick = (e) => {
        e.target.outerText === 'Выход' && dispatch(logOut())
    }

    return (
        <div className={style.mainBlock}>
            <div className={style.menu}>
                {MENU_LINKS.map((elem,index) => (
                    <div className={style.menuItem} key={index}>
                        <NavLink to={elem.link} className={style.menuItemLink} onClick={e => onClick(e) } activeClassName={style.menuItemLinkActive} exact={true}>
                            <p className="text text_type_main-medium">
                                {elem.name}
                            </p>
                        </NavLink>
                    </div>
                ))}
                <div className={style.info}>
                    <p className="text text_type_main-small">
                        В этом разделе вы можете изменить свои персональные данные
                    </p>
                </div>
            </div>
            <div className={style.data}>
                <div className={style.dataItem}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={e => setName(e.target.value)}
                        icon={'EditIcon'}
                        value={name || ''}
                        name={'name'}
                        error={false}
                        ref={nameRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={style.dataItem}>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={e => setEmail(e.target.value)}
                        icon={'EditIcon'}
                        value={email || ''}
                        name={'name'}
                        error={false}
                        ref={emailRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={style.dataItem}>
                    <Input
                        type={'password'}
                        placeholder={'Пароль'}
                        onChange={e => setPwd(e.target.value)}
                        icon={'EditIcon'}
                        value={pwd || ''}
                        name={'name'}
                        error={false}
                        ref={pwdRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={style.button}>
                    <Button type="primary" size="large" onClick={save}>
                        Сохранить
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Profile;