import React from 'react';
import style from "./index.module.css";

export const PageCardLayout = ({ children }) => {
    return (
        <div className={style.main}>{children}</div>
    )
};