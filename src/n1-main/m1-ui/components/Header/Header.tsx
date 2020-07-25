import React from "react";
import style from './Header.module.css'
import {Navbar} from "../Navbar/Navbar";

export function Header() {
    return (
        <div className={style.header}>
            <div className={style.container}>
                <Navbar/>
            </div>
        </div>
    )
}