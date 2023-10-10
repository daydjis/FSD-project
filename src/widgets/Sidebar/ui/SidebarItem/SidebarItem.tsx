import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { SideBarItemType } from 'widgets/Sidebar/model/model';
import { useSelector } from 'react-redux';
import { getAuthUserData } from 'entities/User';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SideBarItemType;
  collapse: boolean;
}

export const SidebarItem = memo(({ item, collapse }: SidebarItemProps) => {
    const { t } = useTranslation();

    const isAuth = useSelector(getAuthUserData);

    if (!isAuth && item.isAuth) {
        return null;
    }
    return (

        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={cls.item}
        >
            <item.Icon className={cls.icon} />
            {!collapse && (
                <span className={cls.link}>
                    {item.text}
                </span>
            )}
        </AppLink>
    );
});
