import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";


const TopRestaurants = ({listOfTopRestaurants}) => {

  const restRef = useRef(null);
  const [scrollVal, setScrollVal] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (restRef.current) {
        setScrollVal(restRef.current.scrollLeft);
      }
    };
    if (restRef.current) {
      restRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (restRef.current) {
        restRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  
  const handleTopRestScroll = (step) => {
    if(restRef.current) {
      restRef.current.scrollLeft += step;
    }
  };

    return (
        <div className="w-full mx-auto">
            <div className="relative">
              <div className="lg:mx-3 lg:p-3 sm:mx-2 sm:p-2 mx-1 p-1">
                <div className="flex justify-start mb-2 pl-3">
                  <div className="md:text-2xl text-lg font-bold">Top restaurant chains in Bangalore</div>
                </div>
                <div className="absolute top-0 flex gap-2 right-8">
                  <button onClick={() => handleTopRestScroll(-400)} 
                          disabled={scrollVal===0}
                          className={`${scrollVal===0 ? "text-slate-400" : "text-black"} flex justify-center items-center 
                          cursor-pointer rounded-full w-6 h-6 p-1 bg-slate-200 hover:bg-slate-300`}>
                          
                        <GoArrowLeft />
                  </button>
                  <button onClick={() => handleTopRestScroll(400)} 
                          className="text-black flex justify-center items-center cursor-pointer rounded-full w-6 h-6 p-1 
                          bg-slate-200 hover:bg-slate-300">
                        <GoArrowRight />
                  </button>
                </div>
                <div className="top-rest-list flex overflow-x-scroll scroll-smooth no-scrollbar" ref={restRef}>
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