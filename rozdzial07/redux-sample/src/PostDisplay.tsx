import React, { useRef } from 'react';
import { AppState } from './store/AppState';
import { useSelector } from 'react-redux';

const PostDisplay = React.memo(() => {
    const renderCount = useRef(0);
    console.log("wyświetlanie komponentu PostDisplay", renderCount.current++);
    const post = useSelector((state: AppState) => state.post);

    if(post) {
        return (<React.Fragment>
            <div>
                <label>Tytuł:</label>
                &nbsp;{post.title}
            </div>
            <div>
                <label>Treść:</label>
                &nbsp;{post.body}
            </div>
        </React.Fragment>);
    } else {
        return null;
    }
});

export default PostDisplay