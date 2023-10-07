import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect } from 'react';
import { fetchProfileData, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from 'entities/User/ui/ProfileCard/ProfileCard';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getProfileInfo } from 'entities/Profile/model/selector/getProfileInfo';
import { getProfileError } from 'entities/Profile/model/selector/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selector/getProfileLoading';
import { getProfileReadonly } from 'entities/Profile/model/selector/getProfileReadonly';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const reducers: ReducersList = {
        profile: profileReducer,
    };

    const dispatch = useAppDispatch();

    const profileData = useSelector(getProfileInfo);
    const profileError = useSelector(getProfileError);
    const profileLoadingStatus = useSelector(getProfileLoading);
    const profileReadOnly = useSelector(getProfileReadonly);
    useEffect((): void => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfileCard
                    readonly={profileReadOnly}
                    data={profileData}
                    error={profileError}
                    loading={profileLoadingStatus}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
