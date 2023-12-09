import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";
import { Buffer } from "buffer";
import { AuthProvider } from "./providers/AuthProvider.tsx";
import { ZkProvider } from "./providers/zkProvider.tsx";

window.Buffer = Buffer;

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
            <ZkProvider>
                <App />
            </ZkProvider>
        </AuthProvider>
    </React.StrictMode>
);
