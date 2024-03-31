import { CDN_URL, vegFoodLogo, nonVegFoodLogo } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurant, addItem, clearCart } from "../utils/cartSlice";
import { IoStarSharp } from "react-icons/io5";
import { useState } from "react";

const ItemList = ({items, restaurantData}) => {
    const [showPopup, setShowPopup] = useState(false);

    const dispatch = useDispatch();
    const restaurantInfo = useSelector(state => state.cart?.restaurantInfo)

    const handleAddItem = (item) => {
        if( Object.keys(restaurantInfo).length === 0 || restaurantInfo?.name === restaurantData?.name ){
            dispatch(addRestaurant(restaurantData));
            dispatch(addItem(item));
            setShowPopup(false);
          }
          else{
            setShowPopup(true);
          }
    };

    return (
        <>
            <div>
                {items.map((item) => (
                    <div key={item?.card?.info?.id} 
                        className="p-2 px-4 pb-3 my-2 mx-auto border-b-2 border-gray-200 text-left grid grid-cols-5 sm:gap-x-4 gap-x-0"
                    >
                        <div className="col-start-1 col-end-4">
                            <div className="text-sm mb-2">
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
                                    <div className="flex justify-start items-center text-xs text-amber-400 mb-1">
                                      <span className="mr-[2px] p-0 m-0 flex items-center">
                                        <IoStarSharp />
                                      </span>
                                      <span className="p-0 m-0">{item?.card?.info?.ribbon?.text}</span>
                                  </div>
                                  )}
                                </div>
                                <p className="font-bold">{item.card.info.name}</p>
                                <div className="flex justify-start items-center">
                                    <span className="mr-1 font-medium"> 
                                      <span className="text-xs">₹</span>
                                      {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                                    </span>
                                    
                                </div>
                            </div>
                            <p className="text-xs text-slate-900 "> 
                                {item?.card?.info?.description}
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 sm:p-2 pt-2 sm:-translate-x-0 -translate-x-1/4">
                            <div className="sm:w-24 sm:h-24 w-20 h-20 relative">
                              {item?.card?.info?.imageId && (
                                <img src={CDN_URL + item?.card?.info?.imageId} 
                                   className="w-full h-full object-cover rounded-md"
                                />
                              )}
                              
                                <button className={`absolute left-1/2 -translate-x-1/2 ${item?.card?.info?.imageId ? "-bottom-3" : "top-8" } 
                                z-10 py-1 sm:px-5 px-3 m-0 rounded-md bg-white shadow-white shadow-md font-semibold text-green-600 
                                text-sm border-slate-300 border-[1px] hover:bg-slate-50`}
                                        onClick={() => handleAddItem(item)}
                                >
                                  ADD
                                </button>
                             
                            </div>
                        </div>
                    </div>
                ))}
            </div>
              
            <div className={`max-w-[380px] h-36 fixed bottom-0 left-1/2 -translate-x-1/2 transition-all duration-500 ease-linear
             p-4 flex flex-col shadow-lg shadow-slate-500 ${showPopup ? 'bottom-8 opacity-100 bg-white' : 'bottom-[-300px]'}
              z-10 `}>
              <h3 className="font-darkerGrotesque text-sm font-semibold">Items already in cart</h3>
              <p className="text-slate-900 font-darkerGrotesque font-normal text-xs py-1 tracking-wide">
                Your cart contains items from other restaurant. Would you
                like to reset your cart for adding items from this
                restaurant?
              </p>
              <div className="flex justify-between sm:justify-center font-darkerGrotesque font-medium text-sm sm:gap-0 gap-3 mt-3">
                <button className="w-2/5 px-1 py-1 bg-white border-[1px] border-green-600 text-green-600"
                      onClick={() => setShowPopup(false)} 
                >
                  NO
                </button>
                <button className="w-2/5 px-1 py-2 bg-green-600 text-white"
                    onClick={() => {
                      dispatch(clearCart());
                      setShowPopup(false);
                    }} 
                >
                  YES, START AFRESH
                </button>
              </div>
            </div>
              
          
        </>
    );
};

export default ItemList;