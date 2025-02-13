const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    CartWindow:false,
    CartWindowProduct:{
    }
};

const VisualSlice = createSlice({
    name:"visual",
    initialState,
    reducers:{
        toggleCartWindow:(state) => {
            state.CartWindow = !state.CartWindow
        },
        setCartWindowProduct:(state,action) => {
            state.CartWindowProduct = action.payload;
        }

    }
})

export const {toggleCartWindow,setCartWindowProduct} = VisualSlice.actions;
export default VisualSlice.reducer;