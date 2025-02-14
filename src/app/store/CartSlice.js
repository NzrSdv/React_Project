const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    cart:[
    ],
    cartSum:0
}

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCartProduct:(state,action) => {
            if(state.cart.findIndex((product) => product.id == action.payload.id) == -1){
                state.cart = [...state.cart,action.payload]
            }
            else{
                const NeededIndex = state.cart.findIndex((product) => product.id == action.payload.id)
                state.cartSum = 0;
                state.cart = state.cart.map((product,index) => {
                    if(index == NeededIndex){
                        if(20 - product.quantity >= action.payload.quantity){
                            return {...product,quantity:product.quantity + action.payload.quantity}
                        }
                        else {
                            return {...product,quantity:20}
                        }
                    }
                    state.cartSum += Math.round(product.price * product.quantity);
                })
            }
        }
        ,
        updateCartTotal:(state) => {
            state.cartSum = 0;
            state.cart.forEach(product => {
                state.cartSum += Math.round(product.price * product.quantity)
            })
        },
        removeCartProduct:(state,action) => {
            state.cart = state.cart.filter(product => {
                if(product.id != action.payload){
                    return product;
                }
            })
        }
        ,
        resetCart:(state) => {
            state.cart = [];
        }
    }
})

export const {addCartProduct,updateCartTotal,removeCartProduct,resetCart} = CartSlice.actions;
export default CartSlice.reducer;