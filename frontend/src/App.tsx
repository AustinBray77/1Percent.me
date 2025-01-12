import React from 'react';
import './App.css';
import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";
import {BrowserRouter, Route, BrowserRouter as Router, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/profile" Component={Profile}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
