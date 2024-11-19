import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/users/Profile";
import { useSelector } from "react-redux";
import RegisterStartup from "./pages/startup/RegisterStartup";
import Construction from "./pages/construction";
export default function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return (
      <>
        <div></div>
        <Routes>
          <Route index element={<Construction />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="profile" element={<Profile />} />
          <Route path="/register/startup" element={<RegisterStartup />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    );
  }
}
