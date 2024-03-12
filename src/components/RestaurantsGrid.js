import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";


const RestaurantsGrid = ({filteredRestaurants}) => {
    return (
        <div className="mx-3 p-3">
          <div className="flex justify-start mb-2 pl-3">
            <div className="text-lg font-semibold tracking-wide">Restaurants with online food delivery in Bangalore</div>
          </div>
          <div className="grid grid-cols-4 gap-x-6 gap-y-5 mb-5">
            {
              filteredRestaurants.map((restaurant) => (
                <Link key={restaurant?.info?.id} to = {"/restaurants/" + restaurant?.info?.id} >
                  <RestaurantCard resData = {restaurant}/>
                </Link>
              ))
            }
          </div>
        </div>
    );
};

export default RestaurantsGrid;