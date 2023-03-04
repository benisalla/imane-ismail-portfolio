import React from 'react';
import MobileScreen from '../MobileScreen';
import style from "./index.module.css";

export const PageLayout = ({ children }) => {
    return (
        <>
            <MobileScreen />
            <div className={style.main}>{children}</div>
        </>
    )
};