import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlePage } from 'pages/ArticlesPage';
import { ArticlePageDetails } from 'pages/ArticlesPageDetails';

export type AuthProps = RouteProps & {
    isAuth?: boolean,
}
export enum AppRoutes {
    ART = 'articles',
    ART_DETAILS = 'articles_details',
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
    PROFILE = 'profile',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.ART]: '/articles',
    [AppRoutes.ART_DETAILS]: '/articles/',
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AuthProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.ART]: {
        path: RoutePath.articles,
        isAuth: true,
        element: <ArticlePage />,
    },
    [AppRoutes.ART_DETAILS]: {
        path: `${RoutePath.articles_details}:id`,
        isAuth: true,
        element: <ArticlePageDetails />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        isAuth: true,
        element: <ProfilePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
