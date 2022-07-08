/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { persistStore, persistReducer } from "redux-persist";
import likesReducer from "../reducers/likes";
import localStorage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root", // with this we're going to persist the whole store
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "Shanjgekjgh",
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, likesReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;