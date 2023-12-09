import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Dashboard } from "./screens/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:address" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
