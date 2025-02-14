const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  Users: [
    {
      id:0,
      name: "admin",
      email: "admin@gmail.com",
      password: "admin",
      cart: [],
    },
  ],
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.Users = [...state.Users, action.payload];
    },
    removeUser: (state, action) => {
      state.Users = state.Users.filter((user) => {
        if (user.email != action.payload) {
          return user;
        }
      });
    },
    setCart: (state, action) => {
      state.Users[action.payload.id].cart = action.payload.cart;
    },
  },
});

export const { addUser, removeUser, setCart } = UserSlice.actions;
export default UserSlice.reducer;
