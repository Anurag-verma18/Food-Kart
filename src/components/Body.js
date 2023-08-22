import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

function filterData(searchText, listOfRestaurants) {
  const filterRes = listOfRestaurants.filter( (res) => 
     res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterRes;
}

const Body = () => {
  
  const [listOfRestaurants, setListOfRestaurant] = useState(resList);
  const [searchText, setSearchText] = useState("");

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" 
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
                );
                setListOfRestaurant(filteredList);
            }}
          >
          Top Rated Restaurants</button>
          <div className="search-container">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search for a Restaurant"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                />
              <button 
                className="search-btn"
                onClick={() => {
                  const data = filterData(searchText, listOfRestaurants);
                  setListOfRestaurant(data);
                }}
              >Search</button>
          </div>
        </div>
       
        <div className="res-container">
          {
            listOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
            ))
          }
        </div>
      </div>
    )
  };

  export default Body;