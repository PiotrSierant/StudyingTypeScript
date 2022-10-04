import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ScreenA } from './ScreenA';
import { ScreenB } from './ScreenB';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ScreenA />}></Route>
        <Route path="/b" element={<ScreenB />}></Route>
      </Routes>
    </div>
  );
}

export default App;
