import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import logo from '../../../images/icons/logo.png';


const Header = () => {
    const logout = () => {
        signOut(auth);
      };

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
   
    
    return (
        <Navbar id='nav-bar' collapseOnSelect expand="lg" sticky="top">
  <Container>
  <Navbar.Brand id='brand-name' className='d-flex align-items-center' role={"button"} onClick={() => {navigate('/home')}}> <img src={logo}  width={50} alt="logo"/><span className='ms-3'>Lotus</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto navigation">
      {/* <Nav.Link as={CustomLink} to='/home'>Home</Nav.Link> */}
      <Nav.Link className='fw-bold' as={CustomLink} to='/home'>Home</Nav.Link>
      <Nav.Link className='fw-bold' as={CustomLink} to='/about'>About</Nav.Link>
    </Nav>
    <Nav>

      <Nav.Link className='fw-bold' as={CustomLink} to='/blogs'>Blog</Nav.Link>

      {
          user?
          <Nav.Link className='fw-bold' as={CustomLink} onClick={logout} to='/login'>Log Out</Nav.Link>
          :<Nav.Link  className='fw-bold' as={CustomLink} to='/login'>Log In</Nav.Link>
      }
      
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;