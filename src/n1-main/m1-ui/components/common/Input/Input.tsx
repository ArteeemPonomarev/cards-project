import React from 'react';

export const Input = (props:any) => {
    return (
        <div>
            <input type={props.type}
                   placeholder={props.type}
                   value={props.value} />
        </div>
    )
}