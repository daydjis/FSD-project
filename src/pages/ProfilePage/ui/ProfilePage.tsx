import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useEffect } from 'react';
import {
    fetchProfileData, Profile, profileActions, profileReducer, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from 'entities/User/ui/ProfileCard/ProfileCard';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getProfileError } from 'entities/Profile/model/selector/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selector/getProfileLoading';
import { getProfileReadonly } from 'entities/Profile/model/selector/getProfileReadonly';
import { getProfileInfoForm } from 'entities/Profile/model/selector/getProfileInfoForm';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();

    const reducers: ReducersList = {
        profile: profileReducer,
    };
    const profileDataForm = useSelector(getProfileInfoForm);
    const profileError = useSelector(getProfileError);
    const profileLoadingStatus = useSelector(getProfileLoading);
    const profileReadOnly = useSelector(getProfileReadonly);

    useEffect((): void => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const onChangeFromUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeFormFirst = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfileCard
                    onSave={onSave}
                    onChangeFirstName={onChangeFormFirst}
                    onChangeUserName={onChangeFromUsername}
                    onEdit={onEdit}
                    onCancelEdit={onCancelEdit}
                    readonly={profileReadOnly}
                    data={profileDataForm}
                    error={profileError}
                    loading={profileLoadingStatus}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
