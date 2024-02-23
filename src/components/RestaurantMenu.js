import { useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    const [showIndex, setShowIndex] = useState(0);

    const handleItemClick = (index) => {
        setShowIndex((prevIndex) => (prevIndex === index ? null : index))
    }
    
    if(resInfo === null)
    {
        return <Shimmer />;
    }

    const {
        name, 
        avgRating, 
        cuisines, 
        costForTwoMessage
    } = resInfo?.cards[0]?.card?.card?.info;


    let {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    if(itemCards === undefined)
    {
        ({itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    }
    //console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    //console.log(itemCards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => 
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    return (
        <div className="text-center " >
            <h1 className="font-bold my-5 text-xl">
               {name} - *{avgRating} 
            </h1>       
            <p className="font-medium text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <div className="m-auto w-6/12">
            {
                categories.map((category, index) => 
                   (<RestaurantCategory 
                     key={category?.card?.card?.title} 
                     data={category?.card?.card} 
                     showItems={index === showIndex ? true : false}
                     onClick={() => handleItemClick(index)}
                    />
                   ))
            }
            </div>
        </div>
    );
};

export default RestaurantMenu;