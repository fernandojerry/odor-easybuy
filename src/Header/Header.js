import React from 'react'
import "./Header.css"
import logo from "../Assets/HeaderLogo.png";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';


function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="Header logo" className="header__logo" />

      <div className="haeder__search">
        <input type="text" className="haeder__searchInput" />
        <SearchIcon className='search__icon'/>
      </div> 

      <div className="header__nav">
        <div className="nav__option">
          <div className="optionOne option__guest">
            <PersonIcon />
            <span>
            Hello
          </span>
          </div>
         
          <span className="optionTwo">
            Sign In
          </span>
          
        </div>
        <div className="nav__option">

          <div className="optionOne option__guest">
            <StoreIcon />
            
          </div>
          <span className="optionTwo">
            Store
          </span>

        </div>
        <div className="nav__cart">

          <ShoppingCartCheckoutIcon className='cart__logo' />
          <span className="optionTwo">
            0
          </span>

        </div>
      </div>
    </div>
  )
}

export default Header

