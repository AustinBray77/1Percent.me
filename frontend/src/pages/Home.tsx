import React from "react";
import "./Home.css";
import LoginButton from "../components/LoginButton.tsx";
import LogoutButton from "../components/LogoutButton.tsx";
import NavBar from "../components/NavBar.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import image from "../calm.png";
import { User } from "../types/user.ts";
import { addUser } from "../api/users.ts";

export default function Home(props: { setUser: (user: User) => void }) {
    const { isAuthenticated, user } = useAuth0();
    //console.log(JSON.stringify(user?.email))
    //console.log(JSON.stringify(user?.given_name + " " + user?.family_name))
    const navigate = useNavigate();

    if (isAuthenticated) {
        const newUser: User = {
            id: "",
            name: user?.given_name + " " + user?.family_name,
            email: user?.email ?? "",
        };

        addUser(newUser)
            .then((res) => {
                newUser.id = res;
                props.setUser(newUser);
                navigate("/profile");
            })
            .catch((err) => {
                console.error(err);
            });
    } else {
        return (
            <main>
                <div className="phoneScreen">
                    <h1 className="title1">Welcome to</h1>
                    <h1 className="title2">1Percent.me</h1>
                    <p className="quote">
                        {" "}
                        "If you can get 1% better each day for one year, you'll
                        end up 37 times better by the time you're done."
                    </p>
                    <img src={image}></img>
                    <LoginButton />
                </div>
            </main>
        );
    }
}
