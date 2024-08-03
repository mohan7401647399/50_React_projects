import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './Slices/taskSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }
})