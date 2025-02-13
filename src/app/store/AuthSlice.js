const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isAuth:false,
    AuthUser:{
        name:"",
        email:"",
        password:"",
        cart:[]
    }
}

const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        toggleAuth:(state) => {
            state.isAuth = !state.isAuth;
        },
        setAuthUser:(state,action) => {
            state.AuthUser = action.payload;
        }

    }
})

export const {toggleAuth,setAuthUser} = AuthSlice.actions;
export default AuthSlice.reducer;