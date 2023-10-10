import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import {
    fetchProfileData,
    getProfileError,
    getProfileInfoForm,
    getProfileLoading,
    getProfileReadonly,
    profileActions,
    profileReducer,
    updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from 'entities/User/ui/ProfileCard/ProfileCard';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { Country, Currency } from 'shared/const/common';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}
const ProfilePage = memo((props: ProfilePageProps) => {
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

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAvatarUrl = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrancy = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ currency: value as Currency || '' }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ country: value as Country || '' }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <ProfileCard
                    onChangeAge={onChangeAge}
                    onChangeLastName={onChangeLastName}
                    onChangeAvatarUrl={onChangeAvatarUrl}
                    onSave={onSave}
                    onChangeFirstName={onChangeFormFirst}
                    onChangeUserName={onChangeFromUsername}
                    onChangeCurrancy={onChangeCurrancy}
                    onChangeCountry={onChangeCountry}
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
});

export default ProfilePage;
