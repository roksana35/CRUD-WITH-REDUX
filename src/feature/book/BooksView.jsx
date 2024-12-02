import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BookSlice';

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books);
    console.log(books)
    const dispatch = useDispatch();
    const handleDeleteBook = (id)=>{
     dispatch(deleteBook(id));
    }
    return (
        <div>
        <h2>List of Books</h2>
        <table className='m-12  tabltable-auto border-collapse border border-gray-300  text-left'>
          <thead className='p-4 border'>
            <tr>
              <th className="border border-gray-300 px-4 py-2 font-bold">ID</th>
              <th className="border border-gray-300 px-4 py-2 font-bold">Title</th>
              <th className="border border-gray-300 px-4 py-2 font-bold">Author</th>
              <th className="border border-gray-300 px-4 py-2 font-bold">Action</th>
            </tr>
          </thead>
          <tbody className='p-4 border'>
            {books &&
              books.map((book) => {
                const { id, title, author } = book;
                return (
                  <tr key={id}>
                    <td className="border border-gray-300 px-4 py-2">{id}</td>
                    <td className="border border-gray-300 px-4 py-2">{title}</td>
                    <td className="border border-gray-300 px-4 py-2">{author}</td>
                    <td  className='border border-gray-300 px-4 py-2 '>
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button className='px-2 py-1 bg-blue-500 text-white font-bold rounded hover:bg-blue-600'>Edit</button>
                    </Link>
                    <button onClick={()=>handleDeleteBook(id)} className='px-2 py-1 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 ml-2'>
                      Delete
                    </button>
                  </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
};

export default BooksView;