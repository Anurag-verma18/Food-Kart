import {CDN_URL} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";
const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatching an action
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} 
                    className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between"
                >
                    <div className="w-4/5">
                        <div className="text-sm">
                            <span>{item.card.info.name}</span>
                            <span> 
                                - ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}
                            </span>
                        </div>
                        <p className="text-[0.6rem] text-gray-500 ">
                            {item.card.info.description}
                        </p>
                    </div>
                    <div className="w-1/5 p-2">
                        <div className="absolute">
                            <button className="p-[0.1rem] rounded-md mx-10
                                    bg-orange-400 text-white text-sm "
                                    onClick={() => handleAddItem(item)}
                            >
                                ADD
                            </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} 
                             className="w-full"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;