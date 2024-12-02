
import { Outlet } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
// import Footer from '../layouts/Footer';


const Main = () => {
    return (
        <div>
           <div>
            <Navbar></Navbar>
           </div>
           <div>
            <Outlet></Outlet>
           </div>
           {/* <div>
            <Footer></Footer>
           </div> */}
            
        </div>
    );
};

export default Main;