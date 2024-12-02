import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "../feature/book/BookSlice";


const store = configureStore({
    reducer:{
        booksReducer:bookSlice.reducer,
    },
})
export default store ;