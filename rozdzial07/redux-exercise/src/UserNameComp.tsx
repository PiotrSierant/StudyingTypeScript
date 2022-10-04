import React, {useContext, useRef } from "react";
import { TestContext } from "./ContextTester";

export const UserNameComp = React.memo(() => {
    const renders = useRef(0);
    console.log('renderowanie komponetu UserNameComp', renders.current++);
    const username = 'pioter';
    console.log('wartosc username w komponencie UserNameComp', username);
    return <div>{username}</div>
});