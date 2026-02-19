import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
const RedirectIfAuth = ({children}) => {
    const { user, loading } = useAuth();

    if(loading){
        return <Spinner animation="border" variant="danger" />
    }
    if(user){
        return <Navigate to='../profile' replace />
    }

    return children
}

export default RedirectIfAuth