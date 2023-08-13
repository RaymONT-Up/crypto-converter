import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CoinsSlice from "./reducers/CoinsSlice";

import { cryptoApi } from "../services/cryptoApi";

const rootReducer = combineReducers({
  CoinsSlice,
  [cryptoApi.reducerPath]: cryptoApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(cryptoApi.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
