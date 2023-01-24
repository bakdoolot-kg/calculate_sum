import {apiSlice} from "../api/apiSlice";

// Используется внутри компонентов
export const firebaseApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getData: builder.query({
      query: (params) => `/v1/data/?param=${params.param}`,
    }),
  })
})


export const {
  useGetDataQuery,
} = firebaseApiSlice
