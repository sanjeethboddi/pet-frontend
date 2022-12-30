import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/register';
import CreatePost from './pages/createPost';
import Profile from './pages/profile';
import Friends from './pages/friends';
import reportWebVitals from './reportWebVitals';

export default function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}> </Route>
        <Route path="/home" element={<Home />}> </Route>
        <Route path="/register" element={<Register />}> </Route>
        <Route path="/create_post" element={<CreatePost/>}> </Route>
        <Route path="/userprofile" element={<Profile/>}> </Route>
        <Route path="/friends" element={<Friends/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
