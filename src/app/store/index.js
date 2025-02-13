const { configureStore } = require("@reduxjs/toolkit");
import { apiSlice } from "./ApiSlice";
import UserRedcuer from "./UserSlice";
import AuthReducer from "./AuthSlice";
import VisualReducer from "./VisualSlice";
import CartReducer from "./CartSlice";
const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    User: UserRedcuer,
    Visual:VisualReducer,
    Cart:CartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
