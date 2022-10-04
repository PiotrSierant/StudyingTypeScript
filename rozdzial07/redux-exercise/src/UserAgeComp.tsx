import React, { useContext } from "react";
import { TestContext } from './ContextTester';

export const UserAgeComp = () => {
    const { userage } = useContext(TestContext);

    return <div>{userage}</div>
}