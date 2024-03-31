import { CDN_URL } from "../utils/constants";
import { IoStarSharp } from "react-icons/io5";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, areaName, aggregatedDiscountInfoV3 } = resData?.info;

  return (
    <div className="m-2 md:w-60 sm:w-72 w-80 h-full bg-white rounded-lg cursor-pointer hover:scale-95 transition-all ease-in-out">
      <div className="w-full md:h-40 sm:h-44 h-48 relative mb-2">
        <img
          className="w-full h-full object-cover shadow-lg rounded-xl"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="absolute inset-x-0 bottom-0 rounded-xl h-2/5 bg-gradient-to-t from-black"></div>
        { (aggregatedDiscountInfoV3?.header && aggregatedDiscountInfoV3.subHeader) && ( 
            <div className="absolute inset-x-0 bottom-0 w-full p-2 truncate break-words text-lg text-white font-black">
              <div>
                {`${aggregatedDiscountInfoV3?.header} ${aggregatedDiscountInfoV3.subHeader} `}
              </div>
            </div>
        )}
      </div>
      <div className="ml-2">
        <h4 className="font-bold text-sm m-0 p-0">{name}</h4>
        <div className="flex justify-start items-center pb-1">
          <span className="text-md text-green-600 pr-1 p-0 m-0">
            <IoStarSharp />
          </span>
          <span className="font-bold text-sm pr-1">{avgRating} •</span>
          <span className="font-bold text-sm">{sla.slaString}</span>
        </div>
        <p className="m-0 p-0 font-normal text-sm w-full truncate break-words text-slate-900">
          {cuisines.join(", ")}
        </p>
        <p className="p-0 m-0 font-normal text-sm text-slate-900">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
