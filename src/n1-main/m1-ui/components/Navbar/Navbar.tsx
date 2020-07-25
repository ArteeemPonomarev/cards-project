import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {login, registration, newPass, restorePass, profile} from '../common/routes';


export const Navbar = () => {
    return (
        <div className={style.nav}>
            <NavLink activeClassName={style.active} to={profile}>Profile</NavLink>
            <NavLink activeClassName={style.active} to={registration}>Registration</NavLink>
            <NavLink activeClassName={style.active} to={restorePass}>Restore password</NavLink>
            <NavLink activeClassName={style.active} to={newPass}>New password</NavLink>
            <NavLink activeClassName={style.active} to={login}>Log In</NavLink>
        </div>
    )
}