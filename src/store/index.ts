import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CoinsSlice from "./reducers/CoinsSlice/CoinsSlice";

import { cryptoApi } from "../services/cryptoApi";

const rootReducer = combineReducers({
  coins: CoinsSlice,
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
