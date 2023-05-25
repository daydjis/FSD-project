import React, {Suspense, useContext, useState} from 'react';
import "./styles /index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages /AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages /MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О себе</Link>

                <Suspense fallback={<div> loading...</div>}>
                    <Routes>
                        <Route path={"/about"} element={<AboutPageAsync/>}/>
                        <Route path={"/"} element={<MainPageAsync/>}/>
                    </Routes>
                </Suspense>
        </div>
    );
};

export default App;