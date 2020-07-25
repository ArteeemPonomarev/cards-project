import React from 'react';
import style from './Main.module.css'
import { Route } from 'react-router-dom';
import {profile, login} from "../common/routes";
import { Profile } from '../Profile/Profile';
import {LogIn} from "../LogIn/LogIn";


export const Main = () => {
    return (
        <div className={style.main}>
            <Route path={profile} render={() => <Profile/>}/>
            <Route path={login} render={() => <LogIn btnValue={'Log In'}/>}/>
        </div>
    )
}