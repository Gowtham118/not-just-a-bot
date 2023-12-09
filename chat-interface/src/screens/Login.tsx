import { useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { verifyAuth } = useAuth();

    const handleSubmit = () => {
        setLoading(true);
        const isAuthenticated = verifyAuth(username, password);
        if (isAuthenticated) {
            setLoading(false);
        }
        setLoading(false);
    };

    return (
        <div className="h-full w-full flex flex-col">
            <div className="m-auto w-[40%] tablet:w-[70%] bg-grey text-white p-8 flex flex-col justify-between rounded-xl gap-y-6">
                <div className="text-5xl text-white font-bold text-center">
                    Login
                </div>
                <div className="flex flex-col gap-y-2">
                    <InputBox
                        label="Username"
                        placeholder="Enter username"
                        value={username}
                        onChange={(value: string) => setUsername(value)}
                    />
                    <InputBox
                        label="Password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(value: string) => setPassword(value)}
                        type="password"
                    />
                </div>
                <Button
                    onClick={handleSubmit}
                    type={username && password ? "active" : "disabled"}
                    loading={loading}
                >
                    LOGIN
                </Button>
            </div>
        </div>
    );
};
