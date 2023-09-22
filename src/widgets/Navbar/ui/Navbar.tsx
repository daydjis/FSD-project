import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'futures/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [IsAuthModal, setIsIsAuthModal] = useState(false);

    const onCloseAuthModal = useCallback(() => {
        setIsIsAuthModal(false);
    }, []);

    const onShowAuthModal = useCallback(() => {
        setIsIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onShowAuthModal}
                theme={ButtonTheme.OUTLINE}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <LoginModal onClose={onCloseAuthModal} isOpen={IsAuthModal} />
        </div>
    );
};
