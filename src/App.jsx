import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";

const LoginPage = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin123" && password === "admin123") {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="bg-[url('/wallpaper.jpg')] h-screen bg-right-top bg-no-repeat flex justify-center items-center">
      <form className="bg-green-600 h-4/6 w-4/12 rounded-3xl flex items-center justify-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl mb-8 font-semibold tracking-wider text-white">
            Register:
          </h1>
          <label
            htmlFor="name"
            className="text-2xl font-sans font-semibold tracking-wider text-white"
          >
            Username:
          </label>
          <input
            type="text"
            id="name"
            className="h-12 w-72 rounded-3xl outline-none px-3 text-2xl font-sans font-semibold bg-green-400 text-white placeholder:text-white"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            htmlFor="password"
            className="text-2xl font-sans font-semibold tracking-wider text-white"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="h-12 w-72 rounded-3xl outline-none px-3 text-2xl font-sans font-semibold bg-green-400 text-white placeholder:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg text-2xl font-semibold font-sans"
            onClick={handleLogin}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const ProtectedRoute = ({ element, isLoggedIn }) => {
  return isLoggedIn ? element : <Navigate to="/" />;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} element={<Dashboard />} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
