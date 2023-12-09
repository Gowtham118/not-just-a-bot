import { useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { verifyAuth, login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);
    const isAuthenticated = verifyAuth(username, password);
    if (isAuthenticated) {
      setUsername(username);
      setPassword(password);
      login();
      navigate("/0x3139C33b7218237Bbd22235C78078731216fD05b");
    }
    setLoading(false);
  };

  return (
    <div className="h-full w-full flex flex-col bg-[#18181a]">
      <div className="m-auto w-[40%] tablet:w-[70%] bg-black border-[1px] border-[#27272a] text-white p-8 flex flex-col justify-between rounded-xl gap-y-6">
        {/* <div className="text-5xl text-light-grey font-bold text-center">
          Login
        </div> */}
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
        <div className="flex gap-x-4 justify-center">
          <Button
            onClick={handleSubmit}
            type={username && password ? "active" : "disabled"}
            loading={loading}
          >
            Login
          </Button>
          <Button
            onClick={handleSubmit}
            type={username && password ? "active" : "disabled"}
            loading={loading}
          >
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
};
