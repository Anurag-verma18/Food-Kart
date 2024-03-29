import { useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { IoStarSharp } from "react-icons/io5";
import { MdDirectionsBike } from "react-icons/md";
import { MdTimelapse } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  const handleItemClick = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  const cards = resInfo?.cards?.find(
    (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card?.card?.info;

  const {
    name,
    avgRating,
    areaName,
    cuisines,
    costForTwoMessage,
    sla,
    feeDetails,
    totalRatingsString,
  } = cards;


  const categories =
    resInfo?.cards?.find(
      (c) => c?.groupedCard
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="my-16 mx-auto max-w-[675px] font-darkerGrotesque">
      <div className="mx-4">
        <div className="pt-4 mb-4 flex justify-between">
          <div className="mr-4 text-xs">
            <h1 className="font-medium mt-5 text-base">{name}</h1>
            <p className="font-normal text-slate-400">
              {cuisines.join(", ")}
            </p>
            <span className="font-normal text-slate-400">{areaName}</span>
            <span className="font-normal text-slate-400">
              , {sla?.lastMileTravel} km
            </span>
          </div>
          <div className="flex items-end">
            <div className="p-2 rounded-md border-[1px] border-slate-300">
              <span className="px-0 text-green-600 flex justify-center items-center">
                  <span className="text-xs flex items-center mr-[2px] p-0 m-0"><IoStarSharp /></span>
                  <span className="text-sm font-medium p-0 m-0 leading-3">{avgRating}</span>
              </span>
              <hr className="border-solid border-b-slate-400 mt-2 mb-2"/>
              <p className="text-xs text-slate-400">{totalRatingsString}</p>
            </div>
          </div>
        </div>
        {feeDetails?.message && ( 
         <div className="text-slate-400 text-xs flex">
            <span className="mr-2 flex items-center justify-center"><MdDirectionsBike /></span>
            <span className="leading-3">{feeDetails?.message}</span>
         </div>
        )}
        <hr className="border-dashed border-b-slate-500 mt-4 mb-4"/>
        <div className="flex justify-start list-none font-semibold text-xs mb-4">
            <ul className="flex items-center">
                <li className="flex mr-4">
                  <span className="mr-1 flex items-center justify-center text-sm"><MdTimelapse /></span>
                  <span className="leading-3 flex items-center justify-center">{sla?.slaString}</span>
                </li>
                <li className="flex">
                  <span className="mr-1 flex items-center justify-center text-sm"><HiOutlineCurrencyRupee /></span>
                  <span className="leading-3 flex items-center justify-center">{costForTwoMessage}</span>
                </li>
            </ul>
        </div>
      </div>
      <div className="">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
