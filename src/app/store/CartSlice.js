const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    cart:[

    ]
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
                state.cart = state.cart.map((product,index) => {
                    if(index == NeededIndex){
                        if(20 - product.quantity >= action.payload.quantity){
                            return {...product,quantity:product.quantity + action.payload.quantity}
                        }
                        else {
                            return {...product,quantity:20}
                        }
                    }      
                })
            }
        }
        ,
    }
})

export const {addCartProduct} = CartSlice.actions;
export default CartSlice.reducer;