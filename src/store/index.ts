import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CoinsSlice from "./reducers/CoinsSlice";

const rootReducer = combineReducers({
  CoinsSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: () => {}
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
