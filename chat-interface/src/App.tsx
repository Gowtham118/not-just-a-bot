import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Dashboard } from "./screens/Dashboard";
import { PrivateRoutes } from "./components/PrivateRoutes";
import { Login } from "./screens/Login";
import Landing from "./screens/Landing";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Landing />}
                ></Route>
                <Route element={<PrivateRoutes />}>
                    <Route
                        path="/:address"
                        element={<Dashboard />}
                    ></Route>
                </Route>
                <Route
                    path="/login"
                    element={<Login />}
                ></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
