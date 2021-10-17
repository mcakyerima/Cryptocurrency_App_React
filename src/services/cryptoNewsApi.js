// import RTK craeteApi and fetchbasequery class
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// set Api headers
const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'ac97bb6c2dmsh42c91c5bb0db9a7p1f1648jsn88feaf9595bd',
  };
  
  const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
  
  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });
  
  export const { useGetCryptoNewsQuery } = cryptoNewsApi;