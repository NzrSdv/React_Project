const { configureStore } = require("@reduxjs/toolkit");
import { apiSlice } from "./ApiSlice";
import UserRedcuer from "./UserSlice";
import AuthReducer from "./AuthSlice";
const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    User: UserRedcuer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
