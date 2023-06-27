import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.Links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.MainLink} to={"/"}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>О себе</AppLink>
            </div>
        </div>
    );
};

