import { configureStore } from "@reduxjs/toolkit";
import counterReducerTest from './counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducerTest
    },
})