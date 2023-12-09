import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import { Dashboard } from "./screens/Dashboard";
import { PrivateRoutes } from "./components/PrivateRoutes";
import { Login } from "./screens/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route
                        path="/:address"
                        element={<Dashboard />}
                    ></Route>
                    <Route
                        path="/"
                        element={<Navigate to="/:login" />}
                    ></Route>
                </Route>
                <Route
                    path="/login"
                    element={<Login />}
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
