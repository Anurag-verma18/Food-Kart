import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantsGrid from "./RestaurantsGrid";
import TopRestaurants from "./TopRestaurants";
import BannerList from "./BannerList";


function filterData(searchText, listOfTopRestaurants) {
  const filterRes = listOfTopRestaurants.filter( (res) => 
     res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterRes;
}

const Body = () => {
    const [listOfBanner, setListOfBanner] = useState([]);
    const [listOfTopRestaurants, setListOfTopRestaurant] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    const [searchText, setSearchText] = useState("");

    const fetchData = async() => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
      const json = await data.json();
      console.log(json);
      setListOfBanner(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
      setListOfTopRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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


    return allRestaurants.length === 0 ? (
       <Shimmer /> 
    ) : (
      <section className="flex flex-col justify-normal py-8 mx-auto max-w-[1110px]">
        <div className="my-3 filter flex justify-between">
          <div className="m-2 p-2 flex items-center">
            <button className="px-2 py-1 bg-orange-400  rounded-lg hover:bg-green-300" 
             onClick={() => {
               const filteredList = allRestaurants.filter(
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
                      const data = filterData(searchText, allRestaurants);
                      setFilteredRestaurants(data);
                      e.preventDefault();
                   }
                }
              }
              />
              <button 
                className="px-2 py-1 m-2 bg-orange-400 hover:bg-green-300 rounded-lg"
                onClick={() => {
                  const data = filterData(searchText, allRestaurants);
                  setFilteredRestaurants(data);
                }}
              >Search</button>
          </div>
        </div>

        { listOfBanner.length !==0 && (
          <BannerList listOfBanner={listOfBanner}/>
        )}

        <div><hr className="mt-6 mb-5 border-t-[1px] border-t-slate-300 mx-3 px-6"/></div>

        { listOfTopRestaurants.length !==0 && (
          <TopRestaurants listOfTopRestaurants={listOfTopRestaurants}/>
        )}

        <div><hr className="mt-6 border-t-[1px] border-t-slate-300 mb-5 mx-3 px-6"/></div>
        
        { allRestaurants.length !==0 && (
          <RestaurantsGrid filteredRestaurants={filteredRestaurants}/>
        )}
      </section>
    )
  };

  export default Body;