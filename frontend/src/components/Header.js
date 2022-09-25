import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../actions/userActions";
import logo from './logo.png';


const Header = () => {
   const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <>
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer style={{fontWeight:"bold", fontSize:"35px",textTransform:"capitalize"}} to="/" >
          <Navbar.Brand><img src={logo} width="50" alt="logo" />ShopSite</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <LinkContainer style={{color:"#f0f0f0"}} to="/product" >
              <Nav.Link> Products</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{color:"#f0f0f0"}} to="/collection" >
              <Nav.Link> Collection</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{color:"#f0f0f0"}} to="/story" >
              <Nav.Link> Our Story</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{color:"#f0f0f0"}} to="/art" >
              <Nav.Link> Art</Nav.Link>
            </LinkContainer>
            <LinkContainer style={{color:"#f0f0f0"}} to="/wholesale" >
              <Nav.Link> Wholesale</Nav.Link>
            </LinkContainer>
            <Nav className="ml-auto" style={{marginLeft:"auto"}}>
            <LinkContainer to="/cart" >
              <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                {/* <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer> */}
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ):<LinkContainer to="/login" >
            <Nav.Link><i className="fas fa-user"></i> Sign In</Nav.Link>
            </LinkContainer>}
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
   
    </>
  );
};

export default Header;
