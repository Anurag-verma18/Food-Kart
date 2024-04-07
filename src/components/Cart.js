import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { removeItem, clearCart, reduceItemQty, addItem, cartTotalPrice } from "../utils/cartSlice";
import {CDN_URL, vegFoodLogo, nonVegFoodLogo} from "../utils/constants";
import { IoStarSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { emptyCartImage } from "../utils/constants";
import { toast } from "react-toastify";
import ScrollToTop from "./ScrollToTop";


const Cart = () => {

    const { cartItems, cartTotalAmount, restaurantInfo } = useSelector((store) => store.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartTotalPrice());
    }, [cartItems]);

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }

    const handleReduceItemQty = (item) => {
        dispatch(reduceItemQty(item));
    }

    const handleIncreaseItemQty = (item) => {
        dispatch(addItem(item));
    }

    const handlePlaceOrder = () => {
      dispatch(clearCart());
      toast.success("Order Placed", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className={`${cartItems.length === 0 ? "sm:mt-36 mt-12" : "my-16"} m-4 p-4 font-darkerGrotesque`}>
            { cartItems.length !== 0 && (
                <h1 className="md:text-2xl sm:text-xl text-lg text-center font-extrabold">Cart</h1>
            )}
            <div className="w-full md:h-full h-auto">
                { cartItems.length === 0 ? (
                    <div className="flex justify-center">
                        <div className="sm:w-1/2 w-4/5 text-xl flex flex-col justify-center items-center">
                            <div className="w-56 my-4 p-2">
                                <img className="object-contain"
                                     src={emptyCartImage}
                                     alt="empty cart"
                                />
                            </div>
                            <h1 className="my-1 text-slate-800 text-sm font-semibold">Your cart is empty</h1>
                            <p className="text-slate-500 text-sm text-center font-semibold">Add items from a restaurant to start a new cart</p>
                            <Link to="/restaurants" className="mt-2">
                                <button className="font-bold text-base text-white bg-orange-400 p-2">EXPLORE RESTAURANTS NEAR YOU</button>
                            </Link>
                        </div>
                    </div>
                ) : (
                      <>
                        <div className="my-3 flex justify-center font-darkerGrotesque">
                          <div className="lg:w-2/5 sm:max-md:w-1/2 sm:flex-row sm:justify-center sm:items-start flex flex-col items-center">
                            <div className="sm:max-md:w-24 sm:max-md:h-24 w-28 h-28 flex justify-center">
                                {restaurantInfo?.cloudinaryImageId && (
                                  <img src={CDN_URL + restaurantInfo?.cloudinaryImageId} 
                                     className="w-full h-full object-cover"
                                  />
                                )}
                            </div> 
                            <div className="flex flex-col sm:justify-start justify-between sm:items-start items-center 
                            sm:pl-4 pt-4 sm:pt-0">
                              <h1 className="font-bold md:text-2xl sm:text-xl text-lg ">{restaurantInfo?.name}</h1>
                              <p className="font-medium md:text-lg sm:text-base text-sm ">{restaurantInfo?.areaName}</p>
                            </div>
                          </div>
                       </div>
                        <div className="flex md:flex-row md:justify-evenly flex-col md:items-start items-center">
                           <div className="md:w-2/3 w-full">
                            {cartItems.map((item) => (
                              <div key={item?.card?.info?.id} 
                                 className="flex justify-between p-2 pb-3 m-2 text-left mx-auto"
                              >
                                <div className="w-1/2">
                                    <div className="text-xs mb-2">
                                        <div className="flex justify-start items-center">
                                          {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                                             <img className="w-3 object-contain mb-1 mr-[5px]" 
                                                  src={vegFoodLogo} 
                                                  alt="veg-food-symbol"
                                             /> ) : (
                                              <img className="w-3 object-contain mb-1 mr-[5px]" 
                                                   src={nonVegFoodLogo} 
                                                   alt="non-veg-food-symbol"/>
                                             )
                                          }
                                          {item?.card?.info?.ribbon?.text && (
                                            <div className="flex justify-start items-center text-xs font-semibold tracking-wide text-red-500 mb-1">
                                              <span className="mr-[2px] p-0 m-0 flex items-center">
                                                <IoStarSharp />
                                              </span>
                                              <span className="p-0 m-0">{item?.card?.info?.ribbon?.text}</span>
                                           </div>
                                          )}
                                        </div>
                                        <p className="font-bold text-sm">{item.card.info.name}</p>
                                        <div className="flex justify-start items-center">
                                            <span className="text-sm font-medium mr-1"> 
                                              <span className="text-xs">₹</span> 
                                              {(item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100) * item.cartQuantity}
                                            </span>
                                            
                                        </div>
                                    </div>
                                    <p className="text-sm md:inline hidden text-slate-900 "> 
                                        {item?.card?.info?.description}
                                    </p>
                                </div>
        
                                <div className="w-1/4 flex justify-center items-center">
                                    <div className="sm:m-2 m-1 flex justify-between items-center md:text-sm text-xs 
                                    text-green-600 border-[1px] border-green-500 rounded-sm">
                                      <button className="py-2 px-2 border-none outline-none bg-none cursor-pointer hover:bg-slate-200"
                                        onClick={() => handleReduceItemQty(item)}
                                      >
                                        <AiOutlineMinus />
                                      </button>
                                      <span className=" px-2 font-sans md:text-lg text-base leading-3 text-green-500">{item.cartQuantity}</span>
                                      <button className="py-2 px-2 border-none outline-none bg-none cursor-pointer hover:bg-slate-200"
                                        onClick={() => handleIncreaseItemQty(item)}  
                                      >
                                        <AiOutlinePlus />
                                      </button>
                                    </div>
                                </div>
        
                                <div className="w-1/4 p-2">
                                  <div className="sm:w-24 sm:h-24 w-20 h-20 relative">
                                      {item?.card?.info?.imageId && (
                                        <img src={CDN_URL + item?.card?.info?.imageId} 
                                          className="w-full h-full object-cover rounded-md"
                                        />
                                      )}
                                      
                                      <button className={`absolute left-1/2 -translate-x-1/2 
                                        ${item?.card?.info?.imageId ? "-bottom-3" : "top-8" } z-10 py-1 sm:px-4 px-2 m-0 rounded-md bg-white 
                                        shadow-white shadow-md font-bold text-red-600 text-sm border-slate-300 border-[1px] 
                                        hover:bg-slate-50`}
                                           onClick={() => handleRemoveItem(item)}
                                      >
                                         REMOVE
                                      </button>
                                    </div>
                                </div>
                              </div>
                             ))}
                           </div>
                           <div className="md:w-1/4 sm:w-1/2 w-full flex flex-col p-4 font-bold">
                               <div className="flex justify-between m-2">
                                  <span className="text-slate-500">Subtotal:</span>
                                  <span className="text-black">
                                    <span className="text-sm font-semibold">₹</span>
                                    {cartTotalAmount}
                                  </span>
                               </div>
                               <button className="w-full flex justify-center items-center text-white bg-green-500 hover:bg-white
                                hover:text-green-500 border-green-500 border-[1px] p-1 m-2 cursor-pointer rounded-sm"
                                  onClick={handlePlaceOrder}
                               >
                                  Place Order
                               </button>
                               <button className="w-full flex justify-center items-center text-white bg-red-500 hover:bg-white
                                hover:text-red-500 border-red-500 border-[1px] p-1 m-2 cursor-pointer rounded-sm"
                                  onClick={handleClearCart}>
                                  Clear Cart
                               </button>
                           </div>
                        </div>
                      </>
                    )}
            </div>
            <ScrollToTop />
        </div>
    );
};
export default Cart; 