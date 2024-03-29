import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import TopRestaurants from "./TopRestaurants";
import BannerList from "./BannerList";
import RestaurantCard from "./RestaurantCard";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";


const Body = () => {
    const [listOfBanner, setListOfBanner] = useState([]);
    const [listOfTopRestaurants, setListOfTopRestaurant] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [fastDlvBtn, setFastDlvBtn] = useState(false);
    const [topRatingBtn, setTopRatingBtn] = useState(false);
    const [offersBtn, setOffersBtn] = useState(false);
    const [searchText, setSearchText] = useState("");

    const fetchData = async() => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
      const json = await data.json();
      console.log(json);

      const restaurants = json?.data?.cards?.find((val) => val?.card?.card?.id === "restaurant_grid_listing")?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      const banners = json?.data?.cards?.find((val) => val?.card?.card?.header?.title === "What's on your mind?")?.card?.card?.gridElements?.infoWithStyle?.info;

      const topChains = json?.data?.cards?.find((val) => val?.card?.card?.header?.title === "Top restaurant chains in Bangalore")?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfBanner(banners);
      setListOfTopRestaurant(topChains);
      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
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

    function filterData(searchText, allRestaurants) {
      const filterRes = allRestaurants.filter( (res) => 
         res?.info?.name.toLowerCase().includes(searchText.toLowerCase()) || 
         res?.info?.cuisines.map((cuisine) => cuisine.toLowerCase()).includes(searchText.toLowerCase())
      );
      return filterRes;
    };

    const handleFastDelivery = () => {
      setFastDlvBtn(true);
      setFilteredRestaurants(allRestaurants.filter(rest => 
        rest?.info?.sla?.deliveryTime >= 25 && rest?.info?.sla?.deliveryTime <= 35
      ))
    };

    const handleTopRating = () => {
      setTopRatingBtn(true);
      const filteredList = allRestaurants.filter(
        (rest) => rest?.info?.avgRating > 4.0);
        setFilteredRestaurants(filteredList);
    };

    const handleOffers = () => {
      setOffersBtn(true);
      setFilteredRestaurants(allRestaurants.filter(rest =>
        rest?.info?.aggregatedDiscountInfoV3?.header || rest?.info?.aggregatedDiscountInfoV3?.subHeader
        ));
    };


    return allRestaurants.length === 0 ? (
       <Shimmer /> 
    ) : (
      <section className="flex flex-col justify-normal py-8 mx-auto max-w-[1110px]">
        <div className="mt-3 filter flex justify-center">
          <div className="flex justify-center items-center m-2 p-2">
              <input 
                type="text" 
                className="h-8 border-b-[1px] border-b-solid border-b-slate-800 focus:outline-none py-1 px-2 rounded-sm placeholder:text-sm placeholder-gray-500 focus:placeholder-gray-400 text-sm font-normal text-slate-900" 
                placeholder="Search for Restaurant and Food"
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
                className="flex justify-center items-center px-3 py-1 m-2 shadow-sm shadow-slate-500 text-base text-white 
                bg-orange-400 hover:bg-orange-500 rounded-2xl"
                onClick={() => {
                  const data = filterData(searchText, allRestaurants);
                  setFilteredRestaurants(data);
                }}
              >
                <span className="pr-1 text-base"><FiSearch /></span>
                Search
              </button>
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
          <div className="mx-3 p-3">
            <div className="flex justify-start mb-2 pl-3">
              <div className="text-lg font-semibold tracking-wide">Restaurants with online food delivery in Bangalore</div>
            </div>
            <div className="flex justify-start mb-2 pl-3">
              <button className={`flex justify-center items-center text-xs text-black mr-2 py-1 px-2 rounded-2xl border-[1px] hover:border-slate-700 ${fastDlvBtn ? "border-slate-800 bg-slate-200" : "border-slate-300 bg-white"}`}
                onClick={handleFastDelivery}
              >
                Fast Delivery
                <span className={`pl-1 ${fastDlvBtn ? "block text-sm" : "hidden"}`} 
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  <IoClose />
                </span>
              </button>
              <button className={`flex justify-center items-center text-xs text-black mr-2 py-1 px-2 rounded-2xl border-[1px]
                hover:border-slate-700 ${topRatingBtn ? "border-slate-800 bg-slate-200" : "border-slate-300 bg-white"}`}
                onClick={handleTopRating}
              >
                Ratings 4.0+
                <span className={`pl-1 ${topRatingBtn ? "block text-sm" : "hidden"}`} 
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  <IoClose />
                </span>
              </button>
              <button className={`flex justify-center items-center text-xs text-black mr-2 py-1 px-2 rounded-2xl border-[1px]
                hover:border-slate-700 ${offersBtn ? "border-slate-800 bg-slate-200" : "border-slate-300 bg-white"}`}
                onClick={handleOffers}
              >
                Offers
                <span className={`pl-1 ${offersBtn ? "block text-sm" : "hidden"}`} 
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  <IoClose />
                </span>
              </button>
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
        )}
      </section>
    )
  };

  export default Body;