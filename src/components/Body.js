import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

function filterData(searchText, listOfRestaurants) {
  const filterRes = listOfRestaurants.filter( (res) => 
     res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterRes;
}

const Body = () => {
  
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    const [searchText, setSearchText] = useState("");

    const fetchData = async() => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
      const json = await data.json();
      setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

  
    useEffect(() => {
      fetchData();
    }, []);


    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
      return (
          <h1>
            Looks like you are offline!! Please check your internet connection
          </h1>
      );


    return listOfRestaurants.length === 0 ? (
       <Shimmer /> 
    ) : (
      <div className="py-16 mx-auto max-w-[1030px]">
        <div className="filter flex justify-between">
          <div className="m-2 p-2 flex items-center">
            <button className="px-2 py-1 bg-orange-300  rounded-lg hover:bg-green-300" 
             onClick={() => {
               const filteredList = listOfRestaurants.filter(
                 (res) => res.info.avgRating > 4
                 );
                 setFilteredRestaurants(filteredList);
             }}
            >
           Top Rated Restaurants</button>
          </div>
          <div className="search-container m-2 p-2">
              <input 
                type="text" 
                className="border border-solid border-slate-500 py-1 px-2 rounded-md" 
                placeholder="Search for a Restaurant"
                value={searchText}
                onChange={
                  (e) => setSearchText(e.target.value)
                }
                onKeyDown = {(e) => {
                    if(e.key === 'Enter'){
                      setSearchText(e.target.value);
                      const data = filterData(searchText, listOfRestaurants);
                      setFilteredRestaurants(data);
                      e.preventDefault();
                   }
                }
              }
              />
              <button 
                className="px-2 py-1 m-2 bg-orange-300 hover:bg-green-300 rounded-lg"
                onClick={() => {
                  const data = filterData(searchText, listOfRestaurants);
                  setFilteredRestaurants(data);
                }}
              >Search</button>
          </div>
        </div>
       
        <div className="grid grid-cols-4 gap-x-6 gap-y-5 mx-3 my-7">
          {
            filteredRestaurants.map((restaurant) => (
              <Link key={restaurant.info.id} to = {"/restaurants/" + restaurant.info.id} >
                <RestaurantCard resData = {restaurant}/>
              </Link>
            ))
          }
        </div>
      </div>
    )
  };

  export default Body;