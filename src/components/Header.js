import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className={`w-full md:flex md:justify-between fixed 
         ${ showBackground ? "bg-white shadow-lg" : "bg-transparent"} top-0 z-30 mb-1 mx-0`}
    >
      <div className="logo-container flex items-center md:ml-10 ml-5">
        <img className="w-32 my-2 p-2" src={LOGO_URL} alt="applogo" />
      </div>
      <div>
        <span onClick={handleMenuClick} className="absolute right-10 top-4 cursor-pointer text-xl md:hidden">
          {open ? <IoClose /> : <IoMenu />}
        </span>
      </div>
      
      <ul
        className={`md:flex md:items-center pl-7 md:p-2 md:m-2 md:font-medium absolute md:static md:z-30 z-[-1] left-0 md:w-auto w-full transition-all duration-700 ease-in ${open ? 'top-12 opacity-100 bg-white' : 'top-[-490px]'} md:opacity-100 opacity-0`}
      >
        <li className="md:px-4 my-3 md:my-0 text-xl md:text-base">
          <Link to="/">Home</Link>
        </li>
        <li className="md:px-4 my-3 md:my-0 text-xl md:text-base">
          <Link to="/restaurants">Restaurants</Link>
        </li>
        <li className="md:px-4 my-3 md:my-0 text-xl md:text-base">
          <Link to="/about">About Us</Link>
        </li>
        <li className="md:px-4 my-3 md:my-0 text-xl md:text-base">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="md:px-4 my-3 md:my-0 text-xl md:text-base">
          <Link to="/cart">Cart({cartItems.length} items)</Link>
        </li>
      </ul>
      
    </div>
  );
};

export default Header;
