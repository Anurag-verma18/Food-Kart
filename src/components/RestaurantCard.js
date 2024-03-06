import {CDN_URL} from "../utils/constants";

const RestaurantCard  = (props) => {
    const {resData} = props;
    console.log(resData);
    const {
      cloudinaryImageId, 
      name, 
      cuisines, 
      avgRating, 
      sla,
      areaName,
    } = resData?.info;
    return (
      <div className="m-2 w-60 h-full bg-white rounded-lg font-[Darker Grotesque]"  >
        <img 
            className="w-full h-40 object-cover shadow-lg rounded-xl mb-2"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
        />
        <div className="ml-2">
          <h4 className="font-medium text-xs m-0 p-0">{name}</h4>
          <span className="font-medium text-xs">{avgRating} stars • </span>
          <span className="font-medium text-xs">{sla.slaString}</span>
          <h5 className="m-0 p-0 text-xs w-full truncate break-words text-slate-800">{cuisines.join(", ")}</h5>
          <span className="text-xs text-slate-800">{areaName}</span>
        </div>
      </div>
    )
  };

  export default RestaurantCard;