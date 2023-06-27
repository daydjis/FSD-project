import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LangSwitchers.module.scss"
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitchersProps {
    className?: string;
}

export const LangSwitchers = ({className}: LangSwitchersProps) => {

    const {t, i18n} = useTranslation()
    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? 'en' : "ru")
    }
    return (
            <Button
                className={classNames(cls.LangSwitchers, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toggle}
            >
                {t("Язык")}
            </Button>
    );
};
