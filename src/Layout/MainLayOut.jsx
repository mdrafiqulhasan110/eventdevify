import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
Aos.refresh();

const MainLayOut = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <div className='w-full md:w-[85%] mx-auto px-4 py-2'>
        <ToastContainer />
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
