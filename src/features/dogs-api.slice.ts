import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import ENV from "../utils/env";

const DOGS_API_KEY = ENV.DOGS_API_KEY

export interface Breed {
   id: string
   name: string
   image: {
      url: string
   }
}

export const dogsApiSlice = createApi({
   reducerPath: 'dogsAPI',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://api.thedogapi.com/v1',
      prepareHeaders(headers) {
         headers.set('x-api-key', DOGS_API_KEY)
         return headers
      }
   }),
   endpoints(build) {
      return {
         fetchBreeds: build.query<Breed[], number | void>({
            query(limit = 10) {
               return `/breeds?limit=${limit}`
            }
         })
      }
   }
})

export const {useFetchBreedsQuery} = dogsApiSlice