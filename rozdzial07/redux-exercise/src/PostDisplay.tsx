import React, { useRef } from "react";
import { AppState } from "./store/AppState";
import { useSelector } from "react-redux";

export const PostDisplay = React.memo(() => {
    const renderCount = useRef(0);
    console.log('Wyświetlenie komponentu PostDisplay', renderCount.current++);
    const post = useSelector((state: AppState) => state.post)
    if(post) {
        const {title, body} = post;
        return (
            <>
                <div>
                    <label>Tytuł:</label> {title}
                </div>
                <div>
                    <label>Treść:</label> {body}
                </div>
            </>
        )
    } else {
        return null;
    }
})