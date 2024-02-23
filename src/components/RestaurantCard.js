import {CDN_URL} from "../utils/constants";

const RestaurantCard  = (props) => {
    const {resData} = props;
    const {
      cloudinaryImageId, 
      name, 
      cuisines, 
      costForTwo,
      avgRating, 
      sla
    } = resData?.info;
    return (
      <div className="m-2 p-2 w-[200px] h-[300px] bg-gray-200 rounded-lg hover:shadow-xl hover:bg-gray-300"  >
        <img 
            className="w-full h-2/5 rounded-lg"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
        />
        <div>
          <h4 className="font-bold text-base py-2">{name}</h4>
          <h5 className="text-sm">{cuisines.join(", ")}</h5>
          <h5 className="text-sm">{costForTwo}</h5>
          <h5 className="text-sm">{avgRating} stars</h5>
          <h5 className="text-sm">{sla.deliveryTime} minutes</h5>
        </div>
      </div>
    )
  };

  export default RestaurantCard;