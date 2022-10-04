import React, { createContext, useState } from "react";
import { UserNameComp } from "./UserNameComp";
import { UserAgeComp } from "./UserAgeComp";

interface User {
    username: string;
    userage: number;
}

export const TestContext = createContext<User>({ username: '', userage: 0 })

export const ContextTester = () => {
    const [userage, serUserage] = useState(20);
    const [localState, setLocalState] = useState(0);

    const onclickAge = () => {
        serUserage(userage + 1)
    }
    const onClickLocalState = () => {
        setLocalState(localState + 1)
    }

    return (
        <>
            <button onClick={onclickAge}>Aktualizuj wiek</button>
            <TestContext.Provider value={{ username: 'pjoter', userage }}>
                <UserAgeComp />
            </TestContext.Provider>
            <UserNameComp />
            <br />
            <button onClick={onClickLocalState}>Aktualizuj stan lokalny</button>
            <br />
            <label>{localState}</label>
        </>
    )
}