import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileInfoForm, Profile } from 'entities/Profile';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import React, { memo, useMemo } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { Country, Currency } from 'shared/const/common';
import { useSelector } from 'react-redux';
import { getAuthForm } from 'entities/Auth/model/selectors/getLogin';
import { getAuthUserData } from 'entities/User';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  loading?: boolean;
  error?: string;
  readonly?: boolean;
  onEdit?: () => void;
  onCancelEdit?: () => void;
  onSave?: () => void;
  onChangeFirstName?: (value?: string) => void;
  onChangeUserName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAvatarUrl?: (value?: string) => void;
  onChangeCurrancy?: (value?: string) => void;
  onChangeCountry?: (value?: string) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
        onChangeAge,
        onChangeLastName,
        onChangeAvatarUrl,
        readonly,
        className,
        data,
        loading,
        error,
        onEdit,
        onSave,
        onCancelEdit,
        onChangeFirstName,
        onChangeUserName,
        onChangeCurrancy,
        onChangeCountry,
    } = props;

    const parseCurrancy = useMemo(() => Object.keys(Currency).map((el) => ({ value: el, option: el })), []);

    const parseCountry = useMemo(() => Object.keys(Country).map((el) => ({ value: el, option: el })), []);

    const currentUser = useSelector(getProfileInfoForm);
    const editUser = useSelector(getAuthUserData);
    const canEdit = currentUser?.id === editUser?.id;

    if (loading) {
        return (
            <div
                className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
                    className,
                ])}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={classNames(cls.ProfileCard, { [cls.error]: true }, [
                    className,
                ])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title="Что то пошло не так обновите страницу"
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.profileInfoWrapper}>
                <div className={cls.profileInfoInput}>
                    <Input
                        onChange={onChangeFirstName}
                        readonly={readonly}
                        placeholder="Name"
                        value={data?.first}
                    />
                    <Input
                        onChange={onChangeUserName}
                        readonly={readonly}
                        placeholder="Role"
                        value={data?.username}
                    />
                    <Input
                        onChange={onChangeLastName}
                        readonly={readonly}
                        placeholder="lastname"
                        value={data?.lastname}
                    />
                    <Input
                        onChange={onChangeAge}
                        readonly={readonly}
                        placeholder="age"
                        value={data?.age}
                        type="number"
                    />
                    <Input
                        onChange={onChangeAvatarUrl}
                        readonly={readonly}
                        placeholder="avatar url"
                        value={data?.avatar}
                    />
                    <Select
                        disabled={readonly}
                        className={cls.selectm}
                        value={data?.currency}
                        onChange={onChangeCurrancy}
                        label="Currency"
                        options={
                            parseCurrancy
                        }
                    />
                    <Select
                        disabled={readonly}
                        value={data?.country}
                        onChange={onChangeCountry}
                        label="Country"
                        options={
                            parseCountry
                        }
                    />

                    {canEdit ? (
                        <div>
                            {readonly ? (
                                <Button className={cls.Profilebtn} onClick={onEdit}>
                                    Редактировать
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        onClick={onSave}
                                        className={classNames(cls.Profilebtn, {}, ['margin-right: 10px'])}
                                    >
                                        Сохранить
                                    </Button>
                                    <Button
                                        className={cls.Profilebtn}
                                        theme={ButtonTheme.RED}
                                        onClick={onCancelEdit}
                                    >
                                        Отменить
                                    </Button>
                                </>
                            )}
                        </div>
                    ) : null}

                </div>
                <Avatar src={data?.avatar} width={200} height={200} border="50%" />
            </div>
        </div>
    );
});
