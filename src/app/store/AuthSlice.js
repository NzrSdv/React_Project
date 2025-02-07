const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    isAuth:false
}

const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        toggle:() => {
            state.isAuth = !state.isAuth;
        }
    }
})

export const {toggle} = AuthSlice.actions;
export default AuthSlice.reducer;