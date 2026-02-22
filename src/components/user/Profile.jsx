import { useAuth } from '../context/AuthContext'
import { Container, Row, Col } from 'react-bootstrap'
const Profile = () => {
    const {user} = useAuth();
    console.log(user)
    return ( 
        <Container className="d-flex justify-content-center">
            <Row>
                <Col xs={12}><h4>Account </h4></Col>
      
            <Col xs={3} className='text-start'>name:</Col>
            <Col xs={3}className='text-start'>{user.name}</Col>
            <Col></Col>
            </Row>
        </Container>
    )
}
export default Profile