// import redux tools for creating API and fetch base queries
import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// this is were we do the login of fetching the data from the API
// the snippet below is copied from rapid API code snipet for testing endpoint

// set the api headers 
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'ac97bb6c2dmsh42c91c5bb0db9a7p1f1648jsn88feaf9595bd'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

// create a simple utility function that add the URL and the headers to our calls
const createRequest = (url) => ({url , headers:cryptoApiHeaders})
console.log(createRequest)

// create Api with redux and export it
export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    // baseQuery...url for our fetch base query...in our case, rapid Api
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
}
);

// we wrap our getCrypto with use *** and Query to make redux to create a hook to our query..this is needed
// allows us to get access to all the data from our qaueries and it also gives us a loading state and completed state
export const { useGetCryptosQuery } = cryptoApi