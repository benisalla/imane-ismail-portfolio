import React from 'react';
import style from "./index.module.css";

export const PageLayout = ({ children }) => {
    return (
        <div className={style.main}>{children}</div>
    )
};