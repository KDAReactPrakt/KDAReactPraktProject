import style from "./Entry.module.css"
import {ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import {FC} from "react";

interface IProps {
    path: string
}

const Entry: FC<IProps> = (path) => {
    return (
        <Link className={path.path === '/profile' ? style.entry + ' ' + style.active : style.entry} to='/profile'>
            <ProfileIcon type={path.path ==='/profile' ? "primary" : "secondary"}/>
            <p className="text text_type_main-default">
                Личный кабинет
            </p>
        </Link>
    );
};

export default Entry;