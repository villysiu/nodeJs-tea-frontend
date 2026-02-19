

import React, { createContext, useContext, useEffect, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    const showAlert = (message, variant='danger') => {
        const id = Date.now()
        setAlerts(arr=>[...arr, {id, message, variant}]);
        setTimeout(()=>{
            setAlerts(arr=>arr.filter(item => item.id !== id));
        }, 60000)
    
    }
    const removeAlert = (id) => {
        setAlerts(arr=>arr.filter(item => item.id !== id));
    }

    return (
        <AlertContext.Provider value={{ alerts, showAlert, removeAlert }} >
            { children }
        </AlertContext.Provider>
    )
}
export const useAlert = () => useContext(AlertContext)
