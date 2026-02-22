

import React, { createContext, useContext, useEffect, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    const showAlert = (message, variant='danger') => {
        const id = Date.now();

        setAlerts((currentAlerts )=>{
            if(currentAlerts.some(alert=>(alert.message===message && alert.variant ===variant)))
                return currentAlerts;

            const updatedAlerts = [...currentAlerts, {id, message, variant}];
            setTimeout(()=>{
                setAlerts(arr=>arr.filter(item => item.id !== id));
            }, 60000);

            return updatedAlerts;
        })
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
