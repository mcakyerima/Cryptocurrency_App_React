// we are gonna use redux for creating a store
import { configureStore } from '@reduxjs/toolkit';


// import crypto API and connect it to redux reducerPath
import { cryptoApi } from "../services/cryptoApi";
// import cyptoNews API to connect with store
import {cryptosNewsApi } from '../services/cryptoNewsApi'

export default configureStore({
    reducer: {
        [cryptosNewsApi.reducerPath] : cryptosNewsApi.reducer,
        [cryptoApi.reducerPath] : cryptoApi.reducer,

    },
});
import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});