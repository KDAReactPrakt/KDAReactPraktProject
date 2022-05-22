interface IMenuLinksObj {
    readonly name: string;
    readonly link: string;
}

export const MENU_LINKS : Array<IMenuLinksObj>= [
    {
        name: 'Профиль',
        link: '/profile'
    },
    {
        name: 'История заказов',
        link: '/profile/orders'
    },
    {
        name: 'Выход',
        link: '/login'
    }
];

export const PROFILE_URL : string = 'https://norma.nomoreparties.space/api/'

export const WS_URL_ALL : string = 'wss://norma.nomoreparties.space/orders/all';
export const WS_URL_OWNER : string = 'wss://norma.nomoreparties.space/orders';