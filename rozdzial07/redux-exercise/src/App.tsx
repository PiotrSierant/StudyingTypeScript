import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { POST_TYPE } from './store/PostReducer';
import { USER_TYPE } from './store/UserReducer';
import { UserDisplay } from './UserDisplay';
import { PostDisplay } from './PostDisplay';

function App() {
  const [userid, setUserid] = useState(0);
  const [postid, setPostid] = useState(0);
  const dispatch = useDispatch();

  const onChangeUserId = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const userIdFromInput = event.target.value ? Number(event.target.value) : 0;
    setUserid(userIdFromInput);

    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    if (userResponse) {
      const users = await userResponse.json();
      const usr = users.find((userItem: any) => {
        return userItem && userItem.id === userIdFromInput;
      });
      const { id, username, email, address } = usr;
      dispatch({
        type: USER_TYPE,
        payload: {
          id: id,
          username: username,
          email: email,
          city: address.city
        }
      });
    }
  }

  const onChangePostId = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const postIdFromInput = event.target.value ? Number(event.target.value) : 0;
    setPostid(postIdFromInput);

    const postRespone = await fetch('https://jsonplaceholder.typicode.com/posts/' + postIdFromInput);
    if (postRespone.ok) {
      const post = await postRespone.json();
      const { id, title, body } = post
      dispatch({
        type: POST_TYPE,
        payload: {
          id: id,
          title: title,
          body: body,
        }
      })
    }
  }

  return (
    <div className="App">
      <label>Indentyfikator użytkownika:</label>
      <input value={userid} onChange={onChangeUserId} />
      <UserDisplay />

      <hr />
      <label>Indentyfikator postu:</label>
      <input value={postid} onChange={onChangePostId} />
      <PostDisplay />
    </div>
  );
}

export default App;
