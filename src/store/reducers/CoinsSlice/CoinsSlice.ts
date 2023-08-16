import { createSlice } from "@reduxjs/toolkit";
import { TypesCoinsInitialState } from "./types";
import { getPageUrlParam, getPerPageUrlParam, setPageUrlParam } from "./urlParams";



const initialState: TypesCoinsInitialState = {
    isLoading: false,
    error: null,


    total: null,

    currentPage: getPageUrlParam() || 1,
    perPage: getPerPageUrlParam() || 30,
}

export const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        setPage(state, action) {

            setPageUrlParam(action.payload)
            debugger
            state.currentPage = action.payload;
        },

        setTotalCoins(state, action) {
            state.total = action.payload;
        },
    },

})

export const { setPage, setTotalCoins } = coinsSlice.actions

export default coinsSlice.reducer