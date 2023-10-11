import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfilePage from 'shared/assets/icons/user.svg';
import ArticlePage from 'shared/assets/icons/news-20-20.svg';

export interface SideBarItemType {
    path: string,
    text: string,
    isAuth?: boolean,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SideBarItemList: SideBarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutePath.articles,
        Icon: ArticlePage,
        isAuth: true,
        text: 'Лента',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О нас',
    },
    {
        path: RoutePath.profile,
        Icon: ProfilePage,
        text: 'Профиль',
        isAuth: true,
    },
];
