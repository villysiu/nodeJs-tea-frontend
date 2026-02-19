import { PersonCircle } from 'react-bootstrap-icons'
import { Nav, NavDropdown, Spinner } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import {useAuth} from '../context/AuthContext'

const UserIcon = () => {
    const navigate = useNavigate();
    const { user,logout, loading } = useAuth();
    const handleLogout = () => {
        logout();
        navigate("/login");
};
    if(loading){
        return <Spinner animation="border" />;
    }
    if(!user){
        return (
            <Nav.Link as={Link} to="/login">
                <PersonCircle size={20} className="me-2" />
            </Nav.Link>
        )
    }
    return (
        <Nav className="ms-auto">
            <NavDropdown 
                title={<PersonCircle size={20} />}
                id="user-dropdown"
                align='end'
                
            >
                <NavDropdown.Item as={Link} to="/orders">
                    orders
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile">
                    Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/logout" onClick={handleLogout}>
                    Logout
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
    
}
export default UserIcon