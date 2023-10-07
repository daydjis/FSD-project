import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { memo } from 'react';
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
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const {
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
    } = props;

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
                </div>
                <Avatar src={data?.avatar} width={135} height={135} />
            </div>
            {readonly ? (
                <Button className={cls.Profilebtn} onClick={onEdit}>
                    Редактировать
                </Button>
            ) : (
                <div>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        className={cls.Profilebtn}
                        onClick={onCancelEdit}
                    >
                        Отменить
                    </Button>
                    <Button
                        className={cls.Profilebtn}
                        onClick={onSave}
                    >
                        Сохранить
                    </Button>
                </div>
            )}
        </div>
    );
});
