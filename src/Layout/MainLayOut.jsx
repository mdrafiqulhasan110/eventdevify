import { Outlet } from "react-router-dom";

const MainLayOut = () => {
  return (
    <div className='w-[85%] mx-auto'>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
