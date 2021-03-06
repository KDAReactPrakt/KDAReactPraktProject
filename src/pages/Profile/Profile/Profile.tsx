import React, {SyntheticEvent, useCallback, useEffect} from "react";
import style from './Profile.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useHistory} from "react-router-dom";
import {MENU_LINKS} from '../../../data/data'
import {useSelector, useDispatch} from '../../../types/hooks'
import {changeUserInfo, getUserInfo, logOut, refreshToken} from "../../../services/actions/workWithAuthInfo";
import {getCookie} from "../../../functions/cookies";
import {TCallbackVV} from "../../../types/callback";
import {Orders} from "../../Orders/Orders";

const Profile = () => {
    const user = useSelector((store) => store.profile.user);
    const [email, setEmail] = React.useState<string>('');
    const [pwd, setPwd] = React.useState<string>('');
    const [name, setName] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [isDefault, setIsDefault] = React.useState<boolean>(true)
    const dispatch:any = useDispatch();

    const history = useHistory();
    const redirectToPath = useCallback(
        (path) => {
            history.replace({pathname: path});
        },
        [history]
    );
    const isOrderHistory = history.location.pathname === '/profile/orders'
    useEffect(() => {
        if(!localStorage.getItem('refreshToken')){
            redirectToPath('/login');
        } else {
            // debugger;
            if (user !== {}) {
                if (getCookie('token') === undefined) {
                    refreshToken().then(()=> dispatch(getUserInfo()).then(() => setIsLoading(false))).catch(e => console.log(e));
                } else {
                    dispatch(getUserInfo()).then(setIsLoading(false))
                }
            }
        }
    }, [])

    useEffect(()=>{
        if(user!==undefined) {
            setEmail(user.email || '')
            setName(user.name || '')
        }
    }, [user])


    const save = useCallback<TCallbackVV>(() => {
        let form = {
            email: email,
            name: name
        }
        dispatch(changeUserInfo(form))
    },[email, name])

    const cancel = useCallback( (e:SyntheticEvent) => {
        e.preventDefault()
        setEmail(user.email || '');
        setName(user.name || '');
        dispatch(getUserInfo()).then(setIsLoading(false))
        setIsDefault(true)
    },[isDefault])

    const onClick = (e: React.MouseEvent) => {
        const text: any = e;
        text.target.outerText === '??????????' && dispatch(logOut())
    }

    return isLoading ? (
        <>???????????????? ????????????</>
    ) : (
        <div className={style.mainBlock}>
            <div className={style.menu}>
                {MENU_LINKS.map((elem,index) => (
                    <div className={style.menuItem} key={index}>
                        <NavLink to={elem.link} className={style.menuItemLink} onClick={(e) => onClick(e) } activeClassName={style.menuItemLinkActive} exact={true}>
                            <p className="text text_type_main-medium">
                                {elem.name}
                            </p>
                        </NavLink>
                    </div>
                ))}
                <div className={style.info}>
                    <p className="text text_type_main-small">
                        ?? ???????? ?????????????? ???? ???????????? ???????????????? ???????? ???????????????????????? ????????????
                    </p>
                </div>
            </div>
            {isOrderHistory ? (
                <Orders/>
            ) : (
                <form onSubmit={cancel}>
                    <div className={style.data}>
                        <div className={style.dataItem}>
                            <Input
                                type={'text'}
                                placeholder={'??????'}
                                onChange={e => {
                                    setName(e.target.value);
                                    setIsDefault(false)
                                }}
                                icon={'EditIcon'}
                                value={name || ''}
                                name={'name'}
                                error={false}
                                errorText={'????????????'}
                                size={'default'}
                            />
                        </div>
                        <div className={style.dataItem}>
                            <Input
                                type={'email'}
                                placeholder={'E-mail'}
                                onChange={e => {
                                    setEmail(e.target.value);
                                    setIsDefault(false)
                                }}
                                icon={'EditIcon'}
                                value={email || ''}
                                name={'name'}
                                error={false}
                                errorText={'????????????'}
                                size={'default'}
                            />
                        </div>
                        <div className={style.dataItem}>
                            <Input
                                type={'password'}
                                placeholder={'????????????'}
                                onChange={e => {
                                    setPwd(e.target.value);
                                    setIsDefault(false)
                                }}
                                icon={'EditIcon'}
                                value={pwd || ''}
                                name={'name'}
                                error={false}
                                errorText={'????????????'}
                                size={'default'}
                            />
                        </div>
                        <div className={style.button}>
                            <Button type="primary" size="large" onClick={save}>
                                ??????????????????
                            </Button>
                        </div>
                        {!isDefault && (
                            <div className={style.button}>
                                <Button type="primary" size="large">
                                    ????????????????
                                </Button>
                            </div>
                        )}
                    </div>
                </form>
            )}
        </div>
    )
}

export default Profile;