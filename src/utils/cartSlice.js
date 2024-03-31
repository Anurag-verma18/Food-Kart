import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQty: localStorage.getItem("cartTotalQty") ? JSON.parse(localStorage.getItem("cartTotalQty")) : 0,
    cartTotalAmount: localStorage.getItem("cartTotalAmount") ? JSON.parse(localStorage.getItem("cartTotalAmount")) : 0,
    restaurantInfo: localStorage.getItem("restaurantInfo") ? JSON.parse(localStorage.getItem("restaurantInfo")) : {},
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addRestaurant: (state, action) => {
            state.restaurantInfo = action.payload;
            localStorage.setItem("restaurantInfo", JSON.stringify(state.restaurantInfo));
        },
        addItem: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item?.card?.info?.id === action.payload?.card?.info?.id
            );
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info("increased item quanity", {
                    position: "bottom-left",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            } else {
                const tempItem = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempItem);
                toast.success("added to cart", {
                    position: "bottom-left",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        removeItem: (state, action) => {
            const updatedItems = state.cartItems.filter(
                (cartItem) => cartItem?.card?.info?.id !== action.payload?.card?.info?.id
            );
            state.cartItems = updatedItems;
            toast.error("removed from cart", {
                position: "bottom-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            })
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            if(state.cartItems.length ===0 ){
                state.restaurantInfo = {};
                localStorage.clear();
            }
        },
        reduceItemQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item?.card?.info?.id === action.payload?.card?.info?.id
            );
            if(state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.info("decreased item quanity", {
                    position: "bottom-left",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            } else {
                const updatedItemQty = state.cartItems.filter(
                    (cartItem) => cartItem?.card?.info?.id !== action.payload?.card?.info?.id
                );
                state.cartItems = updatedItemQty;
                toast.error("removed from cart", {
                    position: "bottom-left",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart: (state) => {
            state.cartItems.length = 0;
            state.restaurantInfo = {};
            localStorage.clear();
            
        },
        cartTotalPrice: (state) => {
            const initialValue = {total: 0, quantity: 0};

            let {total, quantity} = state.cartItems.reduce(
                (cartTotal, cartItem) => {

                    const { cartQuantity } = cartItem;
                    const { price, defaultPrice } = cartItem?.card?.info;
                    const itemTotal = (price/100 || defaultPrice / 100) * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                }, initialValue
            );

            state.cartTotalAmount = total;
            localStorage.setItem("cartTotalAmount", JSON.stringify(state.cartTotalAmount));
            state.cartTotalQty = quantity;
            localStorage.setItem("cartTotalQty", JSON.stringify(state.cartTotalQty));
        }
    }
});

export const { addRestaurant, addItem, removeItem, reduceItemQty, clearCart, cartTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;