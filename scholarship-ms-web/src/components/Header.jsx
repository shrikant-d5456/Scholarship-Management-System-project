import React, { useState } from 'react';
import { BsJustify } from 'react-icons/bs';
import { Link, useLocation } from "react-router-dom";

const Header = () => {

  const if_user_exist = true;

  const [menu, setMenu] = useState(false);
  const path = useLocation().pathname;

  return (<>
    <div className='bg-white w-full flex justify-center shadow-md'>
      <div className='w-11/12 flex items-center justify-between py-[8px] text-sm font-medium text-[#269CFF]'>

        <div className='flex text-lg items-center justify-center gap-2'>
          <button onClick={() => setMenu(!menu)}><BsJustify className='md:hidden block' /></button>
          <Link to="/">logo</Link>
        </div>


        {/* Large devices menu */}
        <div className='md:flex hidden gap-8 justify-center items-center'>
          <ul className='flex gap-8 justify-center items-center'>
            <Link to="/">
              <li className={`${path === "/" ? 'active' : ''}`}>
                Home
              </li>
            </Link>
            {if_user_exist ? (
              <>
                <Link to="/dash">
                  <li className={`${path === "/dash" ? 'active' : ''}`}>
                    Go To Dashboard
                  </li>
                </Link>
                <Link to="/login">
                  <li className="px-4 py-1 bg-[#269CFF] text-white">
                    Logout
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li className="px-4 py-1 bg-[#269CFF] text-white">
                    Login
                  </li>
                </Link>
                <Link to="/signup">
                  <li className="px-4 py-1 bg-[#269CFF] text-white">
                    Sign Up
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>

    {/* Mobile device menu */}
    {menu && (
      <div className='absolute w-full text-black z-10'>
        <div className='md:hidden flex flex-col w-full h-screen bg-[#f0f8ff] gap-2'>
          <ul className='flex flex-col gap-2 '>

            <Link to="/">
              <li className={` px-4 py-1 ${path === "/" ? 'active3' : ''}`} onClick={() => setMenu(false)}>
                Home
              </li>
            </Link>

            {if_user_exist ? (
              <>
                <Link to="/dash">
                  <li className={`px-4 py-1 ${path === "/dash" ? 'active3' : ''}`} onClick={() => setMenu(false)}>
                    Go To Dashboard
                  </li>
                </Link>

                <Link to="/login">
                  <li className="px-4 py-1" onClick={() => setMenu(false)}>
                    Logout
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li className={`px-4 py-1 ${path === "/login" ? 'active3' : ''}`} onClick={() => setMenu(false)}>
                    Login
                  </li>
                </Link>

                <Link to="/signup">
                  <li className={`px-4 py-1 ${path === "/signup" ? 'active3' : ''}`} onClick={() => setMenu(false)}>
                    Sign Up
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    )}
  </>
  );
}

export default Header;