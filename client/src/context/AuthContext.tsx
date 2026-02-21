// import { createContext, useContext, useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import API from "../lib/api";

// type Role = "student" | "admin";

// interface User {
//   id: string;
//   email: string;
//   role: Role;
// }

// interface AuthContextType {
//   user: User | null;
//   token: string | null;
//   login: (token: string) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [token, setToken] = useState<string | null>(
//     () => localStorage.getItem("token")
//   );
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     if (!token) {
//       setUser(null);
//       delete API.defaults.headers.common["Authorization"];
//       return;
//     }

//     try {
//       const decoded = jwtDecode<User & { id: string }>(token);
//       setUser({
//         id: decoded.id,
//         email: decoded.email,
//         role: decoded.role,
//       });

//       API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//       localStorage.setItem("token", token);
//     } catch {
//       setUser(null);
//       localStorage.removeItem("token");
//     }
//   }, [token]);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         token,
//         login: setToken,
//         logout: () => setToken(null),
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
//   return ctx;
// };




import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    const decoded: any = jwtDecode(token);
    setUser(decoded);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: any = jwtDecode(token);
      setUser(decoded);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
