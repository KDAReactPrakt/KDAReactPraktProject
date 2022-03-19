import {Redirect, Route, useLocation} from 'react-router-dom';
import {getCookie} from "../../functions/cookies";

export function ProtectedForAnyRoute({ children, ...rest }) {
    const location = useLocation();
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

