import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://free-food-menus-api-two.vercel.app/",
  }),
  endpoints: (builder) => ({
    getPizzas: builder.query({
      query:(parameter) => `${parameter}`,
    }),
  }),
});

export const {useGetPizzasQuery} = apiSlice;