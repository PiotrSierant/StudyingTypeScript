import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { USER_TYPE } from './store/UserReducer';
import { UserDisplay } from './UserDisplay';

function App() {
  const [userid, serUserid] = useState(0);
  const dispatch = useDispatch();
  const onChangeUserId = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const userIdFromInput = event.target.value ? Number(event.target.value) : 0;
    serUserid(userIdFromInput);

    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    if (userResponse) {
      const users = await userResponse.json();
      const usr = users.find((userItem: any) => {
        return userItem && userItem.id === userIdFromInput;
      });
      dispatch({
        type: USER_TYPE,
        payload: {
          id: usr.id,
          username: usr.username,
          email: usr.email,
          city: usr.address.city
        }
      });
    }
  }

  return (
    <div className="App">
      <label>Indentyfikator użytkownika:</label>
      <input value={userid} onChange={onChangeUserId} />
      <UserDisplay />
    </div>
  );
}

export default App;
