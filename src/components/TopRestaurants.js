import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";


const TopRestaurants = ({listOfTopRestaurants}) => {
    return (
        <div className="w-full mx-auto">
            <div className="relative">
              <div className="mx-3 p-3">
                <div className="flex justify-start mb-2 pl-3">
                  <div className="text-lg font-semibold tracking-wide">Top restaurant chains in Bangalore</div>
                </div>
                <div className="top-rest-list flex overflow-x-scroll no-scrollbar">
                  <div className="flex">
                    {
                      listOfTopRestaurants.map((restaurant) => (
                        <Link key={restaurant?.info?.id} to = {"/restaurants/" + restaurant?.info?.id} >
                          <RestaurantCard resData = {restaurant}/>
                        </Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};

export default TopRestaurants;