import React, {useEffect} from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useAlert } from '../context/AlertContext'

const ProtectedRoute = ({children}) => {
    const { user, loading } = useAuth();
    const { showAlert } = useAlert();
    const location = useLocation();


        if(loading)
            return;
        if (!user) {
            
            showAlert("Authentication required. Return to homepage", "warning");
            return <Navigate to="/" state={{ from: location }} replace />;
            
            
        }


    return children
}

export default ProtectedRoute