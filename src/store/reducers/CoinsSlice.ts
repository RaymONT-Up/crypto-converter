import { ICoin } from "../../models/ICoin"
import { createSlice } from "@reduxjs/toolkit";


interface TypesInitialStat {
    coins: ICoin[];
    isLoading: boolean,
    error: null | string,

    offset: number;
    limit: number;
    total: number | null;
    // totalExchanges: number | null;
    // totalMarkets: number | null
}

const initialState: TypesInitialStat = {
    coins: [],
    isLoading: false,
    error: null,

    offset: 1,
    limit: 30,
    total: null,
    // totalExchanges: null,
    // totalMarkets: null

}

export const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        setPage(state, action) {
            state.offset = action.payload;
        },

        setTotalCoins(state, action) {
            state.total = action.payload;
        }
    },


})

export const { setPage, setTotalCoins } = coinsSlice.actions

export default coinsSlice.reducer