import {Redirect, Route, RouteProps, useLocation} from 'react-router-dom';
import {getCookie} from "../../functions/cookies";
import {FC} from "react";
import {ILocation} from "../../types/location";

export const ProtectedForAnyRoute: FC<RouteProps> = ({ children, ...rest }) => {
    const location = useLocation<ILocation>();
    const refer = location.state && location.state.from;

    if (getCookie('token') !== undefined) {
        return (
            <Redirect to={{pathname:'/'}}/>
        )
    } else {
        if (refer !== '/forgot-password') {
            return (
                <Redirect to={{pathname:'/'}}/>
            )
        }
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

