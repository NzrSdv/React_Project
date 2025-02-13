const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  Users: [
    {
      name: "admin",
      email: "admin@gmail.com",
      password: "admin",
      cart: [
        {
          country: "Chicago, IL",
          dsc: "Choose Your Own Thin Crust Pizza - 4 Pack",
          id: "23699-choose-your-own-thin-crust-pizza-4-pack",
          img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89781/choose-your-own-thin-crust-pizza-4-pack.b928a2008eab50c65dc87e59b5952190.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
          name: "Bartolini’s",
          price: 139,
          quantity: 6,
          rate: 4,
        },
      ],
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
