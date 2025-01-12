import React from 'react';
import './App.css';
import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";
import FindGroup from './pages/FindGroup.tsx';
import {BrowserRouter, Route, BrowserRouter as Router, Routes} from "react-router-dom";
import UpdateStreaks from './pages/UpdateStreaks.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/profile" Component={Profile}/>
        <Route path="/findgroup" Component={FindGroup}/>
        <Route path ="/updateStreaks" Component={UpdateStreaks}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
