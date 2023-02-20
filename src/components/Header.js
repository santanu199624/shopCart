import "./header.css";
import { Link, NavLink } from "react-router-dom";
import  Logo  from "../assets/Logo.jpg";

export const Header = () => {
  return (
    <header>
      <Link className="left_div">
        <img src={Logo} alt="shop_logo" className="logo"/>
        <span>Shopmate</span>
      </Link>

      
        <div className="navigation">
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/cart" className="link">Cart</NavLink>
        </div>
      

      <div className="items">
        Cart:2
      </div>
    </header>
  )
}


