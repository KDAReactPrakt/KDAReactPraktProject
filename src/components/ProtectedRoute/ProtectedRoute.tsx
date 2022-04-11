import {Redirect, Route, RouteProps, useHistory} from 'react-router-dom';
import {getCookie} from "../../functions/cookies";
import {refreshToken} from "../../services/actions/workWithAuthInfo";
import {FC} from "react";

export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
    const history = useHistory();
    if (getCookie('token') === undefined) {
        if(localStorage.getItem('refreshToken') === null ) {
            return (
                <Redirect
                    // Если объект state не является undefined, вернём пользователя назад.
                    to={{
                        // Маршрут, на который произойдёт переадресация
                        pathname: '/login',
                        // В from сохраним текущий маршрут
                        state: { from: history.location.pathname }
                    }}
                />
            );
        } else {
            refreshToken().catch(() =>{
                return (
                    <Redirect
                        // Если объект state не является undefined, вернём пользователя назад.
                        to={{
                            // Маршрут, на который произойдёт переадресация
                            pathname: '/login',
                            // В from сохраним текущий маршрут
                            state: { from: history.location.pathname }
                        }}
                    />
                );
            });
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