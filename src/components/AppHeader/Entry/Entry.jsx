import style from "./Entry.module.css"
import {ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Entry = (path) => {
    return (
        <Link className={path.path === '/profile' ? style.entry + ' ' + style.active : style.entry} to='/profile'>
            <ProfileIcon type={path.path ==='/profile' ? "primary" : "secondary"}/>
            <p className="text text_type_main-default">
                Личный кабинет
            </p>
        </Link>
    );
};

Entry.propTypes = {
    path: PropTypes.string.isRequired
};

export default Entry;