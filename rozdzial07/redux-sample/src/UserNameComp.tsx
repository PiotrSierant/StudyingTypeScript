import React, { useContext, useRef } from 'react';
import { TestContext } from './ContextTester';

const UserNameComp = React.memo(() => {
    const renders = useRef(0);
    console.log("renderowanie komponentu UserNameComp", renders.current++);

    const { username } = useContext(TestContext);
    console.log("wartość username w komponencie UserNameComp", username);
    
    return <div>
        {username}
    </div>
});

export default UserNameComp;