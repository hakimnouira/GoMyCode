import React from 'react'
import {Link, useHistory} from "react-router-dom"
import './header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue } from "../stateProvider/StateProvider"
import image from "./logo.png"

function Header() {
    const [{basket, user}] = useStateValue();
    const history = useHistory();
    console.log(basket);
    console.log(user);

   
    return (
        <nav className="header">
            {/* logo on the left -> img */}
            <Link to="/">
                <img className="header__logo" src={image}  alt="amazon logo"/>
            </Link>
            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            {/* 3 links */}
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick="" className="header__option">
                        <span className="header__optionLineOne">Hello {user?.email}</span>
                        <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
            </div>

            <div className="header__nav">
                <Link to="/update" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">update</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* shopping basket icon */}
                    <ShoppingBasketIcon/>
                    {/* number of items in the basket */}
                    {/* we use {basket?.length} to render the length of the basket when basket property of the state reaches the header component. without this, the dom will render the basket.length even when it has not reach the header component therby resulting to an error  */}
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>
            {/* basket icon with number*/}
        </nav>
    )
}

export default Header

