import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInit, userActions } from 'entities/User';

function App() {
    const { theme } = useTheme();

    const dispatch = useDispatch();

    const initUser = useSelector(getUserInit);

    useEffect(() => {
        dispatch(userActions.InitAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {initUser && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
