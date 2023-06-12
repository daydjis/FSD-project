import React, {Suspense, useContext, useState} from 'react';
import "app/styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/themeProviders";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme] )}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О себе</Link>

                <Suspense fallback={<div> loading...</div>}>
                    <Routes>
                        <Route path={"/about"} element={<AboutPage/>}/>
                        <Route path={"/"} element={<MainPage/>}/>
                    </Routes>
                </Suspense>
        </div>
    );
};

export default App;