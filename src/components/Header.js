import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {

    const [showBackground, setShowBackground] = useState(false);



    useEffect( () => {
      const handleScroll = () => {
        if(window.scrollY > 0) {
          setShowBackground(true);
        } else {
          setShowBackground(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, []);

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
      <div className={`w-full flex justify-between fixed 
           ${showBackground ? "bg-white shadow-md" : "bg-transparent"} top-0 z-30 mb-1 mx-0`}>
        <div className="logo-container flex items-center ml-10">
          <img className="w-32" 
             src = {LOGO_URL}
             alt="applogo"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex p-2 m-2 font-medium">
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/restaurants">Restaurants</Link>
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
          </ul>
        </div>
      </div>
    )
  };

  export default Header;