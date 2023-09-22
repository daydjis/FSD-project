import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [IsAuthModal, setIsIsAuthModal] = useState(false);

    const onToogleBtn = useCallback(() => {
        setIsIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onToogleBtn}
                theme={ButtonTheme.OUTLINE}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={IsAuthModal} onClose={onToogleBtn}>
                adasdasdadas adasdasdadasadasdasdadasadas
                dasdadasadasdasdadasadas
                dasdadasadasdasdadas
            </Modal>
        </div>
    );
};
