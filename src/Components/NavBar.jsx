import { Link, NavLink } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import MenuItems from "./MenuItems";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export default function NavBar() {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <div className='navbar p-0 border-b border-[#50b8e7] border-opacity-50 mb-4'>
        <div className='navbar-start'>
          <Link to={"/"}>
            <p className='font-extrabold text-2xl md:text-4xl'>
              <span className='text-[#50b8e7] '>Event</span>Devify
            </p>
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 gap-1'>{MenuItems}</ul>
        </div>
        <div className='navbar-end flex gap-4'>
          {user && <p>{user.displayName}</p>}

          {user ? (
            <button
              onClick={() => logOut()}
              className='btn btn-info  lg:flex text-white'
            >
              Sign Out
            </button>
          ) : (
            <NavLink to={"/signin"}>
              <button className='btn btn-info  lg:flex text-white'>Sign In</button>
            </NavLink>
          )}

          <div className='lg:hidden'>
            <div className='drawer'>
              <input
                id='my-drawer'
                type='checkbox'
                className='drawer-toggle'
              />
              <div className='drawer-content'>
                {/* Page content here */}
                <label htmlFor='my-drawer'>
                  <AiOutlineBars />
                </label>
              </div>
              <div className='drawer-side z-10 '>
                <label
                  htmlFor='my-drawer'
                  aria-label='close sidebar'
                  className='drawer-overlay'
                ></label>
                <ul className='menu p-4 w-80 max-w-[60vw] min-h-full bg-base-200 text-base-content'>
                  {/* Sidebar content here */}
                  {MenuItems}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
