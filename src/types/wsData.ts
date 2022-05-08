import {PayloadAction} from "@reduxjs/toolkit";

export type TWSData = {
    orders: TOrder[];
    total?: number;
    totalToday?: number;
};

export type TWsActions = {
    wsInit: string;
    wsSendMessage: string;
    onOpen: string;
    onClose: string;
    onError: string;
    onMessage: string;
};

export type TOrder = {
    _id: string;
    ingredients: Array<string>;
    name: string;
    status: string;
    number: string;
    createdAt: string;
    updatedAt: string;
};

export type TInitialSocketState = {
    wsConnected: boolean;
    data: TWSData;
    error?: PayloadAction | null;
};

export type TOrdersStatuses = {
    created:Array<string>;
    pending:Array<string>;
    done:Array<string>;
}

export interface IFeedItem {
    readonly elem:TOrder;
    readonly onClick?: (number: string) => void;
}