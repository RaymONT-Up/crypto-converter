import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { setTotalCoins } from "../store/reducers/CoinsSlice/CoinsSlice";



// interface getCryptosParams {
//     limit?: number;
//     offset: number;
// }

const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';


// позже вынести это в uttils и написать тесты 
const createRequest =
    (url: string) => ({ url, headers: cryptoApiHeaders })

// const createUrlParams =  (url:string,params:getCryptosParams) =>{

// }


export const cryptoApi = createApi({
    reducerPath: 'crypto',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: builder => ({
        // Late to typify the response of the request
        // builder.query<YourResponseType, void>
        getCryptos: builder.query({
            query: ({ perPage, currentPage, search }) =>
                createRequest(`/coins?limit=${perPage}&offset=${currentPage}&search=${search}`),
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi