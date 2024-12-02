import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const inisitialBooks = {
    books:[
        {
            id:1 ,title:'Love Bangladesh', author:'Roksan Akter'
        },
        {
            id:2 ,title:' Bangladeshi', author:'Roksan Akter'
        },
       
    ]
}
 export const bookSlice = createSlice({
    name:'books',
    initialState:inisitialBooks,
    reducers:{
        showBooks :(state) => state,
        addBook: (state,action) => {
            state.books.push({
                id: uuidv4(), // Generate a unique ID
            ...action.payload,
        })
        },
        updateBook: (state,action) => {
            const {id,title,author} = action.payload;
            const isBookExist = state.books.filter((book)=> book.id === id);
            if(isBookExist){
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        },
        deleteBook: (state,action) => {
            const id = action.payload
            const updatedBooks = state.books.filter((book) => book.id !== id);

      // ID পুনরায় ধারাবাহিকভাবে সেট করা
      state.books = updatedBooks.map((book, index) => ({
        ...book,
        id: index + 1,
      }));
        },
    },
})
export const {showBooks,addBook,deleteBook,updateBook} = bookSlice.actions;
export default bookSlice.reducer;