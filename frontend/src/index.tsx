import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOM;
const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Auth0Provider
            domain = {domain}
            clientId= {clientID}
            authorizationParams={{
                redirect_uri: window.location.origin,
              }}
            >
            <App />
        </Auth0Provider>
    </React.StrictMode>
);
