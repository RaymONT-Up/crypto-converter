import { ICoin } from "../../models/ICoin"
import {createSlice} from "@reduxjs/toolkit";


interface TypesInitialStat {
    coins: ICoin[];
    isLoading: boolean,
    error: null | string,
}

const initialState: TypesInitialStat  = {
    coins: [],
    isLoading: false,
    error: null,
}

export const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers:{
        action(state,action) {
            
        }
    },
})

export default coinsSlice.reducer