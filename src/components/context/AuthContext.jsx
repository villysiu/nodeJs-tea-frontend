import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const backendApi = 'http://localhost:3000'

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const login = (userData) => {
        setUser(userData)
    }
    const logout = () => {
        setUser(null)
        localStorage.removeItem("token");
    }


    // fetch current user if jwt key exists in local storage
    useEffect(()=>{
      const fetchCurrentUser = async() => {
        if(!localStorage.getItem("token")){
            setLoading(false)
            return null;
        }
        try{
            const response = await fetch('http://localhost:3000/api/v1/auth/me',{
                'method': "GET",
                'headers': {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            if (response.status === 401) {
                logout();
                throw new Error("Session expired. Please login again.");
            }
            if(!response.ok) {
                console.log("Failed to fetch current user");
                setLoading(false)
                return;
            }

            const data = await response.json()
            setUser(data.user)
        }
        catch(error){
            console.error(error);
        } 
        finally {
            setLoading(false);
        }
    }
      fetchCurrentUser();
  }, [])

  useEffect(() => {
    console.log("User changed:", user);
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider> 
    )
}

export const useAuth = () => useContext(AuthContext)