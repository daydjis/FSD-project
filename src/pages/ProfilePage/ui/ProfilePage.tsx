import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect } from 'react';
import { fetchProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();

    useEffect((): void => {
        // @ts-ignore
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            Страница профиля
        </div>
    );
};

export default ProfilePage;
