import React from 'react';
import {Input} from "../common/Input/Input";
import {Button} from "../common/Button/Button";

export const LogIn = (props: any) => {
    return (
        <div>
            <Input />
            <Button value={props.btnValue}/>
        </div>
    )
}