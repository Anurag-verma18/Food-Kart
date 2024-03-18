import ItemList from "./ItemList";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const RestaurantCategory = ({data, showItems, onClick}) => {
    
    return (
        <div className="">
            <div className=" bg-gray-50 hover:bg-gray-100 active:bg-gray-200 
                               p-4 my-2 w-full mx-auto shadow-md ">
               <div className="flex justify-between cursor-pointer"
                    onClick={onClick} 
               >
                   <span className="font-medium text-base">
                        {data.title} ({data.itemCards.length})
                   </span>
                   {showItems ? (
                     <RiArrowDropUpLine className="text-xl"/>
                     ) : (
                     <RiArrowDropDownLine className="text-xl"/>
                     )}
               </div>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    );
};

export default RestaurantCategory;