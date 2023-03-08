import React from 'react';
import MobileScreen from '../MobileScreen';
import style from "./index.module.css";

export const PageLayout = ({ children, isAnim }) => {
    return (
        <>
            {isAnim ? <MobileScreen /> : null}
            <div className={style.main}>{children}</div>
        </>
    )
};