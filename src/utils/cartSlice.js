import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: [],
    cartTotalQty: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) =>{
            const itemIndex = state.cartItems.findIndex(
                (item) => item?.card?.info?.id === action.payload?.card?.info?.id
            );
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info("increased item quanity", {
                    position: "bottom-left",
                    autoClose: 3000,
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
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
            
        },
        removeItem: (state, action) => {
            const updatedItems = state.cartItems.filter(
                (cartItem) => cartItem?.card?.info?.id !== action.payload?.card?.info?.id
            );
            state.cartItems = updatedItems;
            toast.error("removed from cart", {
                position: "bottom-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            })
        },
        reduceItemQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item?.card?.info?.id === action.payload?.card?.info?.id
            );
            if(state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
                toast.info("decreased item quanity", {
                    position: "bottom-left",
                    autoClose: 3000,
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
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        },
        clearCart: (state) => {
            state.cartItems.length = 0;
        },
        cartTotalPrice: (state) => {
            const initialValue = {total: 0, quantity: 0};

            let {total, quantity} = state.cartItems.reduce(
                (cartTotal, cartItem) => {

                    const { cartQuantity } = cartItem;
                    const { price } = cartItem?.card?.info;
                    const itemTotal = (price/100) * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                }, initialValue
            );

            state.cartTotalAmount = total;
            state.cartTotalQty = quantity;
        }
    }
});

export const {addItem, removeItem, reduceItemQty, clearCart, cartTotalPrice} = cartSlice.actions;
export default cartSlice.reducer;