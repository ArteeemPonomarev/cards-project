import {combineReducers, createStore} from "redux";
import {loginizationReducer} from "./reducers/loginization-reducer";
import {profilenReducer} from "./reducers/profile-reducer";
import {createPassReducer} from "./reducers/create-pass-reducer";
import {restorePassReducer} from "./reducers/restore-pass-reducer";
import {registrationReducer} from "./reducers/registration-reducer";

const rootReducer = combineReducers({
    loginization: loginizationReducer,
    profile: profilenReducer,
    newPassword: createPassReducer,
    resoterPass: restorePassReducer,
    registration: registrationReducer
})

export const store = createStore(rootReducer);