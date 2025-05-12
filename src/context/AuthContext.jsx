import { createContext, use, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      const data = await response.data;
      console.log("login", data);
      if (!data) {
        alert("Please Login to see your dashboard");
      }
      setIsLoading(false);

      setUser(data);
      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (error) {
      console.log("Failed to load your profile");
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    navigate("/");
  };

  console.log("loading", isLoading);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
