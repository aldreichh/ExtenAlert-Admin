import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import WhitelistedPage from './pages/WhitelistedPage';
import BlacklistedPage from './pages/BlacklistedPage';
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/whitelisted_data" element={<WhitelistedPage />} />
            <Route path="/blacklisted_data" element={<BlacklistedPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
