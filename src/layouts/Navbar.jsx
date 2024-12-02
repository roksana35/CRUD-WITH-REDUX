import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="bg-[#f285a8] flex justify-center items-center p-4 h-5">
            <Link className="ml-6 text-black " to='/'>Home </Link>
            <Link className="ml-6 text-black " to='/addbook'>Add book</Link>
            <Link className="ml-6 text-black " to='/showbook'>Show Books </Link>
            
            
        </nav>
    );
};

export default Navbar;