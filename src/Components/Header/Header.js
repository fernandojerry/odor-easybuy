import React from 'react'
import {Navbar, Container, Nav} from "react-bootstrap"
import "./Header.css"
import logo from "../../Assets/HeaderLogo.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity) 
  return (

   <Navbar bg='dark' expand='md' variant='dark' sticky="top">
    <Container fluid="sm">
      <Navbar.Brand>
      <NavLink to='/'>
        <img src={logo} alt="Header logo" className="header__logo" />
      </NavLink>
      </Navbar.Brand>

      <form className='haeder__search' >
        <input type="text" className="haeder__searchInput" />
            <SearchIcon className='search__icon'/>
      </form>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav variant='dark' className='ms-auto'>
            <NavLink to='/login' className='nav-link p-2'>
                <PersonIcon className='optionOne'/>
              
              <span className='optionTwo'>Sign In</span>
            </NavLink>
            <NavLink to='/store' className='nav-link p-2'>
                <StoreIcon className='optionOne'/>

                <span className='optionTwo'>Store</span>
            </NavLink>
            <NavLink to='/cart'className='nav-link p-2'>
                <span>
                  <ShoppingCartCheckoutIcon className='cart__logo' />
                </span>
                <span>{totalQuantity}</span>
            </NavLink>
          </Nav>
         
        </Navbar.Collapse>
    </Container>
   </Navbar>



    
  )
}

export default Header

