import React, { FC } from 'react';

interface ScreenCProps{
    message: string;
}

export const ScreenC: FC<ScreenCProps> = ({message}) => {
    return <div>{message}</div>
}