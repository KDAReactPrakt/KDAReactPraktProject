import {Redirect, Route} from 'react-router-dom';
import {getCookie} from "../../functions/cookies";

export function ProtectedForAuthRoute({ children, ...rest }) {
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

