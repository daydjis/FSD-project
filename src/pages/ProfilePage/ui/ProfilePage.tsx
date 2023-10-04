import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {

    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            Страница профиля
        </div>
    );
};

export default ProfilePage;
