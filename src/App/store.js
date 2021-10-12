// we are gonna use redux for creating a store
import { configureStore } from '@reduxjs/toolkit';

// import API and connect it to redux reducerPath
import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath] : cryptoApi.reducer
    },
});