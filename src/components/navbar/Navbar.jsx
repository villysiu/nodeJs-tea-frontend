import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import UserIcon from '../user/UserIcon'
import CartIcon from '../cart/CartIcon'
const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
       
        <Navbar.Brand as={Link} to="/">Tea Node</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
          {/* <Nav.Link as={Link} to="/secret">Secret</Nav.Link> */}
        </Nav>
       
        <Nav>
          <UserIcon />
          <CartIcon />
          {/* <Nav.Link>User</Nav.Link> */}
          
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
