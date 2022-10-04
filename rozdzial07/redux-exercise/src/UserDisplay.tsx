import React, { useState } from "react";
import { AppState } from "./store/AppState";
import { useSelector } from "react-redux";

export const UserDisplay = () => {
    const user = useSelector((state: AppState) => state.user);

    if (user) {
        const { username, email, city } = user;
        return (
            <>
                <div>
                    <label>Nazwa użytkownika:</label> {username}
                </div>
                <div>
                    <label>Email:</label> {email}
                </div>
                <div>
                    <label>Miasto:</label> {city}
                </div>
            </>
        )
    } else {
        return null;
    }
}