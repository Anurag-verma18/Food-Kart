import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");

    useEffect( () => {
    }, [btnNameReact]);

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
      <div className="flex justify-between bg-transparent sticky z-10 shadow-md rounded-sm mb-1 mx-0">
        <div className="logo-container flex items-center ml-10">
          <img className="w-32" 
             src = {LOGO_URL}
             alt="applogo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about" >About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact" >Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery" >Grocery</Link>
            </li>
            <li className="px-4 font-bold text-xl">
            <Link to="/cart" >Cart({cartItems.length} items)</Link>
            </li>
            <button className="px-4"
               onClick={() => {
                 btnNameReact === "Login" 
                   ? setBtnNameReact("Logout") 
                   : setBtnNameReact("Login");
               }}
            >{btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    )
  };

  export default Header;