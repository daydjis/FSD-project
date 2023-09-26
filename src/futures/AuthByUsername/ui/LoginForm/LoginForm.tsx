import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from 'entities/Auth/model/slice/authSlice';
import { Input } from 'shared/ui/Input/Input';
import { getAuthForm } from 'entities/Auth/model/selectors/getLogin';
import { loginByUsername } from 'entities/Auth/model/service/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
    } = props;

    const dispatch: any = useDispatch();

    const {
        username, password, isLoading, error,
    } = useSelector(getAuthForm);

    const enterLogin = useCallback((value:string) => {
        dispatch(authActions.setUsername(value));
    }, [dispatch]);

    const enterPassword = useCallback((value:string) => {
        dispatch(authActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    const t = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title="Форма авторизации" />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                className={cls.input}
                placeholder="введите логин"
                type="text"
                onChange={enterLogin}
                value={username}
            />
            <Input
                className={cls.input}
                placeholder="введите пароль"
                type="text"
                onChange={enterPassword}
                value={password}
            />
            <Button
                onClick={onLoginClick}
                disabled={isLoading}
            >
                Войти
            </Button>
        </div>
    );
});
