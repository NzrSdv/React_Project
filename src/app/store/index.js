const { configureStore } = require("@reduxjs/toolkit");
import { apiSlice } from "./ApiSlice";
import AuthReducer from "./AuthSlice";
const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});
export default store;
