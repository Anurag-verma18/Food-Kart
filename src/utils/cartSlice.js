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
        
        clearCart: (state) => {
            state.cartItems.length = 0;
        }
    }
});

export const {addItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;