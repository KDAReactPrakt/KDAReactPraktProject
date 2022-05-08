import React, { useEffect, FC } from 'react';
import { useDispatch } from '../../../types/hooks';
import FeedDetails from "./FeedDetail/FeedDetail";
import {useLocation} from "react-router-dom";


export const FeedId: FC = () => {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    useEffect(() => {
        path.indexOf('feed') !== -1
            ? dispatch({ type: 'WS_CONNECTION_START' })
            : dispatch({ type: 'WS_CONNECTION_START_USER' })
        return () => {
            path.indexOf('feed') !== -1
                ? dispatch({ type: 'WS_CONNECTION_CLOSED' })
                : dispatch({ type: 'WS_CONNECTION_CLOSED_USER' })
        };
    }, [dispatch]);

    return (
        <main>
            <FeedDetails/>
        </main>
    )
};