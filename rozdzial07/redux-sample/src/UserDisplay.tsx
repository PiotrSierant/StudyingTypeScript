import React, { useRef } from 'react';
import { AppState } from './store/AppState';
import { useSelector } from 'react-redux';

const UserDisplay = React.memo(() => {
    const renderCount = useRef(0);
    console.log("wyświetlanie komponentu UserDisplay", renderCount.current++);
    const user = useSelector((state: AppState) => state.user);

    if(user) {
        return (<React.Fragment>
            <div>
                <label>Nazwa użytkownika:</label>
                &nbsp;{user.username}
            </div>
            <div>
                <label>E-mail:</label>
                &nbsp;{user.email}
            </div>
            <div>
                <label>Miasto:</label>
                &nbsp;{user.city}
            </div>
        </React.Fragment>);
    } else {
        return null;
    }
});

export default UserDisplay