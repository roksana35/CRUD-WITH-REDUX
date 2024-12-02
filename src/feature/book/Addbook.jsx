import  { useState } from 'react';  
import { useDispatch,  } from 'react-redux';
import { addBook } from './BookSlice';
import { replace, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Addbook = () => {     
    const [title, setTitle] = useState("");
    const [author,setAuthor] = useState("");  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const numberofBooks = useSelector((state)=>state.booksReducer.books.length)
    // console.log(numberofBooks)
    const hadleSubmit = (e) =>{
        e.preventDefault();
        const book = { id:uuidv4(), title,author}
        console.log(book)
        dispatch(addBook(book))
        navigate('/showbook',{replace:true})
    }   

    return (         
        <div className="flex justify-center items-center mt-28 "> 
            {/* পেজের পুরো উচ্চতা এবং প্রস্থ ব্যবহার করে কেন্দ্রীকরণ */}
            <form onSubmit={hadleSubmit} className="bg-white p-6 rounded shadow-md w-1/2"> 
                <div className="flex flex-col">                 
                    <label htmlFor="author" className="mb-2 font-medium">Title:</label>                 
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />             
                </div>         
                <div className="flex flex-col">                 
                    <label htmlFor="author" className="mb-2 font-medium">Author:</label>                 
                    <input 
                        type="text" 
                        id="author" 
                        name="author" 
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)} 
                        required 
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />             
                </div> 
                <button type='submit' className="border border-black text-black px-3 py-2 rounded-lg mt-4">Add Book</button>        
            </form>         
        </div>     
    ); 
};  

export default Addbook;
