import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(()=>{
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [tokens, setTokens] = useState(() => {
    const savedTokens = localStorage.getItem("tokens");
    return savedTokens ? JSON.parse(savedTokens) : null;
  });


  const login = async (data) => {
    try {
      const response = await axios.post("/api/auth/login/", data);

      if (response.status === 202) {
        const { access, refresh } = response.data;
        setTokens({ access, refresh });
        localStorage.setItem("tokens", JSON.stringify({ access, refresh }));
        localStorage.setItem("user", JSON.stringify({ email:data.email }));
        setUser({ email:data.email });
        return true;
      }
    } catch (error) {
      throw new Error(error?.response?.data?.error || "Login failed");
    }
  };

  const register = async (data) => {
    try {
      console.log(data);
      const response = await axios.post("/api/auth/register/", data);

      console.log("here");
      if (response.status === 201) {
        return true;
      }
    } catch (error) {
      console.log(error);
      throw new Error(error?.response?.data?.error[0] || "Registration failed");
    }
  };

  const refrestToken = async () => {
    try {
      const response = await axios.post("/api/auth/refresh/", { refresh: tokens.refresh });
      if (response.status === 200) {
        setTokens({ access, refresh });
        localStorage.setItem("tokens", JSON.stringify({ access, refresh }));
      }
    }catch(err){
      console.log(err);
      throw new Error(err.response?.data?.error[0] || "Token refresh failed");
    }
  }

  const logout = () => {
    setUser(null);
    setTokens(null);
    localStorage.removeItem("tokens");
  };


  const value = {
    user,
    tokens,
    login,
    logout,
    register,
    refrestToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
