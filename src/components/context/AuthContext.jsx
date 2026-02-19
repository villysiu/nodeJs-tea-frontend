import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const backendApi = 'http://localhost:3000'

    const [user, setUser] = useState(null)
    const login = (userData) => {
        setUser(userData)
    }
    const logout = () => {
        setUser(null)
    }
    // fetch current user if jwt key exists in local storage




    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider> 
    )
}

export const useAuth = () => useContext(AuthContext)