import NavBar from "../Components/Navbar";

const Error = () => {
  return (
    <div>
      <div className='md:w-[85%] mx-auto px-4 py-2'>
        <NavBar></NavBar>
        <p className='text-center text-2xl mt-20'>Ooops!!! Page Not Found</p>
      </div>
    </div>
  );
};

export default Error;
