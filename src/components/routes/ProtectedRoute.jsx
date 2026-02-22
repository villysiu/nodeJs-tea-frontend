import React, {useEffect} from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useAlert } from '../context/AlertContext'

const ProtectedRoute = ({children}) => {
    const { user, loading, setShow } = useAuth();
    const { showAlert } = useAlert();
    const location = useLocation();

    useEffect(() => {
        if(loading)
            return;
        if (!user) {
            setShow('login')
            showAlert("Authentication required", "warning");
        }
    }, [user, showAlert, loading]); 

    if(!user) return;

    return children
}

export default ProtectedRoute