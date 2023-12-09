import React, { Dispatch, SetStateAction, useContext, useState } from "react";

type AuthProviderProps = {
    children: React.ReactNode;
};

type AuthContext = {
    username: string;
    password: string;
    isAuthenticated: boolean;
    setUsername: Dispatch<SetStateAction<string>>;
    setPassword: Dispatch<SetStateAction<string>>;
    login: () => void;
    verifyAuth: (username: string, password: string) => boolean;
};

const AuthContext = React.createContext<AuthContext>({
    username: "",
    password: "",
    setUsername: () => {},
    setPassword: () => {},
    isAuthenticated: false,
    login: () => {
        return;
    },
    verifyAuth: (username: string, password: string): boolean => {
        username + password;
        return true;
    },
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const verifyAuth = (username: string, password: string) => {
        console.log(username + password);
        // verify zk proof
        return true;
    };

    return (
        <AuthContext.Provider
            value={{
                username,
                password,
                setUsername,
                setPassword,
                isAuthenticated,
                login,
                verifyAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
