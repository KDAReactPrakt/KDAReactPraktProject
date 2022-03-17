import {useEffect} from "react";
import style from "./Entry.module.css"
import {ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";

const Entry = () => {
    const history = useHistory();
    let path = '/';
    useEffect(()=>{
         path = history.location.pathname;
    },[history])
    console.log(path)
    return (
        <Link className={path === '/profile' ? style.entry + ' ' + style.active : style.entry} to='/profile'>
            <ProfileIcon type={path ==='/profile' ? "primary" : "secondary"}/>
            <p className="text text_type_main-default">
                Личный кабинет
            </p>
        </Link>
    );
};

export default Entry;