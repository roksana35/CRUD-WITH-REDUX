import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import ErrorPage from "../pages/ErrorPage";
import Homepage from "../pages/Homepage";
import Addbook from "../feature/book/Addbook";
import BooksView from "../feature/book/BooksView";
import Editbook from "../feature/book/Editbook";
const router = createBrowserRouter([
    {
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Homepage></Homepage>,
        },
        {
            path:'/addbook',
            element:<Addbook></Addbook>,
        },
        {
            path:'/showbook',
            element:<BooksView></BooksView>,
        },
        {
            path:'/edit-book',
            element:<Editbook></Editbook>,
        },
    ]

}
]);
export default router;