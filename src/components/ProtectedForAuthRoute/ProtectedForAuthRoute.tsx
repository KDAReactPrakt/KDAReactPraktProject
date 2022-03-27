import {Redirect, Route, RouteProps} from 'react-router-dom';
import {getCookie} from "../../functions/cookies";
import {FC} from "react";

export const ProtectedForAuthRoute: FC<RouteProps> = ({ children, ...rest }) => {
    if (getCookie('token') !== undefined) {
        return (
            <Redirect to={{pathname:'/'}}/>
        )
    }

    return (
        <Route
            {...rest}
            render={() => (
                children
            )
            }
        />
    );
}

