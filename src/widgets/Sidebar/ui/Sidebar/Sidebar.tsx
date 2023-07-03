import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwicher } from 'widgets/ThemeSwicher';
import { LangSwitchers } from 'widgets/LangSwitchers';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    const { t } = useTranslation();
    return (
        <div className={
            classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
        }
        >
            <div className={cls.switchers}>
                <Button
                    className={cls.fix}
                    type="button"
                    onClick={onToggle}
                >
                    { t('Развернуть')}
                </Button>
                <ThemeSwicher />
                <LangSwitchers />
            </div>
        </div>
    );
};
