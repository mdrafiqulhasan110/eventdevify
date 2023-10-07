import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar";

const MainLayOut = () => {
  return (
    <div>
      <div className='md:w-[85%] mx-auto px-4 py-2'>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayOut;
