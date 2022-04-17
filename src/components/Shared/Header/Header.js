import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {


    return (
     <header>
          <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={CustomLink} to='/login'>Home</Nav.Link>
      <Nav.Link as={CustomLink} to='/login'>Home</Nav.Link>
      <Nav.Link as={CustomLink} to='/login'>Home</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
     </header>
    );
};

export default Header;