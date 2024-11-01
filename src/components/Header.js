import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useDispatch ,useSelector } from "react-redux";
import { cartTotalPrice } from "../utils/cartSlice";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { BsHandbagFill } from "react-icons/bs";

const Header = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [open, setOpen] = useState(false);

  const { cartItems, cartTotalQty } = useSelector((store) => store.cart);
  //console.log(cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const handleHomeClick = () => {
    navigate("/");
    setOpen(false);
  };

  const handleRestaurantsClick = () => {
    navigate("/restaurants");
    setOpen(false);
  };

  const handleCartClick = () => {
    navigate("/cart");
    setOpen(false);
  };

  useEffect(() => {
    dispatch(cartTotalPrice());
}, [cartItems]);

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
        className={`md:flex md:items-center pl-7 md:p-2 md:m-2 md:font-semibold font-darkerGrotesque absolute md:static md:z-30 z-[-1] 
        left-0 md:w-auto w-full transition-all duration-700 ease-in ${open ? 'top-12 opacity-100 bg-white' : 'top-[-490px]'} 
        md:opacity-100 opacity-0`}
      >
        <li className="md:px-4 my-3 md:my-0 text-xl hover:text-orange-400">
          <span onClick={handleHomeClick} className="cursor-pointer">Home</span>
        </li>
        <li className="md:px-4 my-3 md:my-0 text-xl hover:text-orange-400">
          <span onClick={handleRestaurantsClick} className="cursor-pointer">Restaurants</span>
        </li>
        <li className="md:px-4 my-3 md:my-0 text-lg hover:text-orange-400">
          <div className="md:flex md:justify-between cursor-pointer"
            onClick={handleCartClick}
          >
            <span className="mr-1 inline-flex items-center">
              <BsHandbagFill />
            </span>
            <span className="md:text-lg inline-flex items-center"> • {cartTotalQty}</span>
          </div>
        </li>
      </ul>
      
    </div>
  );
};

export default Header;
