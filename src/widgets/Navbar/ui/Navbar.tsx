import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.Links}>
            <AppLink theme={AppLinkTheme.SECONDARY} className={cls.MainLink} to="/">Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О себе</AppLink>
        </div>
    </div>
);
