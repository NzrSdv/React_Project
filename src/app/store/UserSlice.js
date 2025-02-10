const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  Users: [{ name: "admin", email: "admin@gmail.com", password: "admin" }],
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
  },
});

export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
