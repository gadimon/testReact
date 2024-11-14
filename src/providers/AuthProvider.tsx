import { createContext, useState, ReactNode, useEffect } from "react";


  interface User {
    name: ReactNode;
    id?: string;
    username: string;
    password: string;
    org: string;
    area: string;
  }



interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

useEffect(()=>{
console.log(user);

},[user])


  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( {username, password} ),
      });
      

      if (!response.ok) {
        return false;
      }


      const data = await response.json();
      
      if (data) {
  
        setUser(data);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
      });

      if (response.ok) {
        setUser(null);
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
