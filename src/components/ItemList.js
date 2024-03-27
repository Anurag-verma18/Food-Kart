import {CDN_URL, vegFoodLogo, nonVegFoodLogo} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";
import { IoStarSharp } from "react-icons/io5";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatching an action
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id} 
                    className="p-2 pb-3 m-2 border-b-2 border-gray-200 text-left flex justify-between"
                >
                    <div className="w-4/5">
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
                                <span className="text-[0.7rem] mr-1"> 
                                    ₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                                </span>
                                
                            </div>
                        </div>
                        <p className="text-[0.6rem] text-gray-500 "> 
                            {item?.card?.info?.description}
                        </p>
                    </div>
                    <div className="w-1/5 p-2">
                        <div className="w-full h-24 relative">
                          {item?.card?.info?.imageId && (
                            <img src={CDN_URL + item?.card?.info?.imageId} 
                               className="w-full h-full object-cover rounded-md"
                            />
                          )}
                          <div className={`absolute right-5 ${item?.card?.info?.imageId ? "-bottom-3" : "top-8" } z-10`}>
                            <button className="py-1 px-5 m-0 rounded-md bg-white shadow-white shadow-md font-medium text-green-600 
                            text-xs border-slate-300 border-[1px] hover:bg-slate-50"
                                    onClick={() => handleAddItem(item)}
                            >
                              ADD
                            </button>
                         </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;