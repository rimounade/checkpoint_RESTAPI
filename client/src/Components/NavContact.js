import {Navbar, Container, Nav} from "react-bootstrap"
import { Link } from "react-router-dom"
const NavContact = ()=>{
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/ListContact">Contacts</Nav.Link>
            <Nav.Link as={Link} to="/AddContact">Add Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default NavContact