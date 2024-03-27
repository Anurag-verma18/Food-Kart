import { useEffect } from "react";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, clearCart, reduceItemQty, addItem, cartTotalPrice } from "../utils/cartSlice";
import {CDN_URL, vegFoodLogo, nonVegFoodLogo} from "../utils/constants";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { emptyCartImage } from "../utils/constants";


const Cart = () => {

    const { cartItems, cartTotalAmount } = useSelector((store) => store.cart);

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

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className={`${cartItems.length === 0 ? "mt-36" : "my-16"} m-4 p-4`}>
            { cartItems.length !== 0 && (
                <h1 className="text-2xl text-center font-semibold">Cart</h1>
            )}
            <div className="w-full h-screen">
                { cartItems.length === 0 ? (
                    <div className="flex justify-center">
                        <div className="w-1/2 text-xl flex flex-col justify-center items-center">
                            <div className="w-56 my-4 p-2">
                                <img className="object-contain"
                                     src={emptyCartImage}
                                     alt="empty cart"
                                />
                            </div>
                            <h1 className="my-1 text-slate-800 text-sm text-semibold">Your cart is empty</h1>
                            <p className="text-slate-500 text-[0.8rem]">Add items from a restaurant to start a new cart</p>
                            <Link to="/restaurants" className="mt-2">
                                <button className="text-sm text-white bg-orange-400 p-2">EXPLORE RESTAURANTS NEAR YOU</button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-evenly">
                       <div className="w-2/3">
                        {cartItems.map((item) => (
                          <div key={item?.card?.info?.id} 
                             className="flex justify-between p-2 pb-3 m-2 text-left"
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
                                        <div className="flex justify-start items-center text-[0.7rem] text-amber-400 mb-1">
                                          <span className="mr-[2px] p-0 m-0 flex items-center">
                                            <IoStarSharp />
                                          </span>
                                          <span className="p-0 m-0">{item?.card?.info?.ribbon?.text}</span>
                                      </div>
                                      )}
                                    </div>
                                    <p>{item.card.info.name}</p>
                                    <div className="flex justify-start items-center">
                                        <span className="text-xs font-medium mr-1"> 
                                            ₹ {(item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100) * item.cartQuantity}
                                        </span>
                                        
                                    </div>
                                </div>
                                <p className="text-[0.6rem] text-gray-500 "> 
                                    {item?.card?.info?.description}
                                </p>
                            </div>
    
                            <div className="w-1/4 flex justify-center items-center">
                                <div className="p-2 m-2 flex justify-between items-center text-base text-green-500 border-[1px]
                                border-green-500 leading-3">
                                  <button className="border-none outline-none bg-none cursor-pointer pr-3"
                                    onClick={() => handleReduceItemQty(item)}
                                  >
                                    -
                                  </button>
                                  <div>{item.cartQuantity}</div>
                                  <button className="border-none outline-none bg-none cursor-pointer pl-3"
                                    onClick={() => handleIncreaseItemQty(item)}  
                                  >
                                    +
                                  </button>
                                </div>
                            </div>
    
                            <div className="w-1/4 p-2">
                                <div className="w-3/5 h-24 relative">
                                  {item?.card?.info?.imageId && (
                                    <img src={CDN_URL + item?.card?.info?.imageId} 
                                       className="w-full h-full object-cover rounded-md"
                                    />
                                  )}
                                  <div className={`absolute right-5 ${item?.card?.info?.imageId ? "-bottom-3" : "top-8" } z-10`}>
                                    <button className="py-1 px-3 m-0 rounded-md bg-white shadow-white shadow-md font-medium 
                                    text-red-600 text-xs border-slate-300 border-[1px] hover:bg-slate-50"
                                            onClick={() => handleRemoveItem(item)}
                                    >
                                      REMOVE
                                    </button>
                                 </div>
                                </div>
                            </div>
                          </div>
                         ))}
                       </div>
                       <div className="w-1/4 flex flex-col justify-start p-4">
                           <div className="flex justify-between m-2">
                              <span className="text-slate-500 font-medium">Subtotal:</span>
                              <span className="text-black font-medium">₹{cartTotalAmount}</span>
                           </div>
                           <button className="w-full flex justify-center items-center text-white bg-green-500 hover:bg-white
                            hover:text-green-500 border-green-500 border-[1px] p-1 m-2 cursor-pointer rounded-sm">
                              Place Order
                           </button>
                           <button className="w-full flex justify-center items-center text-white bg-red-500 hover:bg-white
                            hover:text-red-500 border-red-500 border-[1px] p-1 m-2 cursor-pointer rounded-sm"
                              onClick={handleClearCart}>
                              Clear Cart
                           </button>
                       </div>
                    </div>
                    )}
            </div>
        </div>
    );
};
export default Cart; 