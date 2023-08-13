import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const cryptoApiHeaders = {
    'X-RapidAPI-Key': '4e2120354fmsh8a26afe29d6287fp13103ejsn27b307e3f07b',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest =
    (url: string) => ({ url, headers: cryptoApiHeaders })



export const cryptoApi = createApi({
    reducerPath: 'crypto',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: builder => ({
        // Late to typify the response of the request
        //  builder.query<YourResponseType, void>
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
})

// @ts-ignore
export const {
    useGetCryptosQuery,
} = cryptoApi