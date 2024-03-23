import {createSlice} from "@reduxjs/toolkit";

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
                (item) => item.id === action.payload.id
            );
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempItem = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempItem);
            }
            
        },
        removeItem: (state, action) => {
            const updatedItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            );
            state.cartItems = updatedItems;
        },
        reduceItemQty: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if(state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else {
                const updatedItemQty = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                );
                state.cartItems = updatedItemQty;
            }
        },
        clearCart: (state) => {
            state.cartItems.length = 0;
        },
        cartTotalPrice: (state) => {
            const initialValue = {total: 0, quantity: 0};

            let {subTotal, quantity} = state.cartItems.reduce(
                (cartTotal, cartItem) => {

                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                }, initialValue
            );

            state.cartTotalAmount = subTotal;
            state.cartTotalQty = quantity;
        }
    }
});

export const {addItem, removeItem, reduceItemQty, clearCart, cartTotalPrice} = cartSlice.actions;
export default cartSlice.reducer;