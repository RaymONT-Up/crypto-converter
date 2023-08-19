import { createSlice } from "@reduxjs/toolkit";
import { TypesCoinsInitialState } from "./types";
import { getPageUrlParam, getPerPageUrlParam, getSearchUrlParam, setPageUrlParam, setSearchUrlParam } from "./urlParams";



const initialState: TypesCoinsInitialState = {
    isLoading: false,
    error: null,


    total: null,

    currentPage: getPageUrlParam() || 1,
    perPage: getPerPageUrlParam() || 21,
    search: getSearchUrlParam() || '',
}

export const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        setPage(state, action) {
            setPageUrlParam(action.payload)
            state.currentPage = action.payload;
        },

        setTotalCoins(state, action) {
            state.total = action.payload;
        },

        setSearch(state, action) {
            setSearchUrlParam(action.payload)
            state.search = action.payload;

            // установка первой страницы 
            setPageUrlParam(1)
            state.currentPage = 1;
        },
    },

})

export const { setPage, setTotalCoins, setSearch } = coinsSlice.actions

export default coinsSlice.reducer