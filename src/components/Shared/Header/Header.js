import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    const logout = () => {
        signOut(auth);
      };

    const [user, loading, error] = useAuthState(auth);
   
    
    return (
     <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to='/'>Lotus</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {/* <Nav.Link as={CustomLink} to='/home'>Home</Nav.Link> */}
      <Nav.Link as={CustomLink} to='/home'>Services</Nav.Link>
      <Nav.Link as={CustomLink} to='/about'>About</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={CustomLink} to='/blogs'>Blog</Nav.Link>

      {
          user?
          <Nav.Link onClick={logout} to='/login'>Log Out</Nav.Link>
          :<Nav.Link  as={CustomLink} to='/login'>Log In</Nav.Link>
      }
      
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
     </header>
    );
};

export default Header;