import React, { FC, useEffect } from 'react';

interface ScreenCProps {
    message: string;
    history: any;
    match: any;
}

export const ScreenC: FC<ScreenCProps> = (props) => {
    const onClickGoBack = () => {
        props.history.goBack();
    }
    return <div>
        <div>{"Twój indetyfikator:" + props.match.params.userid}</div>
        <div>{props.message}</div>
        <div>
            <button onClick={onClickGoBack}>Go back!</button>
        </div>
    </div>
}