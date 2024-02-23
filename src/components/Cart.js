import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button 
                 className="text-white bg-black p-1 m-2 rounded-md hover:bg-slate-900"
                 onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 && (
                    <h1 className="m-2 p-2">Cart is empty. Add items in the cart to see them.</h1>
                )}
                <ItemList items={cartItems}/>
            </div>
        </div>
    );
};
export default Cart; 