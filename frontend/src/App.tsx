import React from "react";
import "./App.css";
import Home from "./pages/Home.tsx";
import Profile from "./pages/Profile.tsx";
import FindGroup from "./pages/FindGroup.tsx";
import {
    BrowserRouter,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import UpdateStreaks from "./pages/UpdateStreaks.tsx";

function App() {
    const [user, setUser] = React.useState({ name: "", email: "", id: "" });

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home setUser={setUser} />} />
                <Route path="/profile" element={<Profile user={user} />} />
                <Route path="/findgroup" element={<FindGroup user={user} />} />
                <Route path="/updateStreaks" element={<UpdateStreaks />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
