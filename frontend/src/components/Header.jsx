import React, { useState } from 'react';
import { BsJustify } from 'react-icons/bs';
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo.jpg';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const if_user_exist = false;
  const [user, setUser] = useState("teacher");
  const [menu, setMenu] = useState(false);
  const path = useLocation().pathname;

  //
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className='bg-white w-full flex justify-center shadow-md'>
        <div className='w-11/12 flex items-center justify-between py-[8px] text-sm font-medium text-color-blue'>
          <div className='flex text-lg items-center justify-center gap-2'>
            <button onClick={() => setMenu(!menu)}>
              <BsJustify className='md:hidden block' />
            </button>
            <Link to="/">
              <div className='flex justify-start items-center gap-2 w-full text-sm font-serif'>
                <span onClick={() => setMenu(false)} className='flex w-8 h-8 rounded-full' title='Edit Profile'>
                  <img className='w-full h-full object-cover rounded-full' src={logo} alt="admin" />
                </span>
                Swaami Vivekanand Shikshan Sanstha {t('welcome_message')}
              </div>
            </Link>
          </div>

          {/* Large devices menu */}
          <div className='md:flex hidden gap-8 justify-center items-center'>
            <ul className='flex gap-8 justify-center items-center'>
              {if_user_exist ? (
                <>
                  <Link to={user === "teacher" ? '/teacher-dash' : '/headquarter-dash'}>
                    <li className={`${path === '/teacher-dash' || path === '/headquarter-dash' ? 'active' : ''}`}>
                      Dashboard
                    </li>
                  </Link>
                  <Link to="/">
                    <li className="px-4 py-1 bg-color-blue text-white">
                      Logout
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/">
                    <li className="px-4 py-1 bg-color-blue text-white">
                      Login
                    </li>
                  </Link>
                  <Link to="/signup">
                    <li className="px-4 py-1 bg-color-blue text-white">
                      Sign Up
                    </li>
                  </Link>
                </>
              )}
              <select
                className='btn w-fit outline-none text-white py-1 px-2'
                onChange={(e) => changeLanguage(e.target.value)} 
              >
                <option value="en">English</option>
                <option value="mr">Marathi</option>
                <option value="hn">Hindi</option>
              </select>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile device menu */}
      {menu && (
        <div className='absolute w-full text-black z-20'>
          <div className='md:hidden flex flex-col w-full h-screen bg-[#f0f8ff] gap-2'>
            <ul className='flex flex-col gap-2 '>
              <select
                className='btn w-full outline-none text-white py-1 px-2'
                onChange={(e) => changeLanguage(e.target.value)} // Change language on select
              >
                <option value="">Change Language</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="mr">Marathi</option>
                <option value="hn">Hindi</option>
              </select>
              {if_user_exist ? (
                <>
                  <Link to={user === "teacher" ? '/teacher-dash' : '/headquarter-dash'}>
                    <li
                      onClick={() => setMenu(false)}
                      className={`${path === '/teacher-dash' || path === '/headquarter-dash' ? 'active2 px-4 py-1' : 'px-4 py-1'}`}>
                      Dashboard
                    </li>
                  </Link>
                  <Link to="/">
                    <li className="px-4 py-1" onClick={() => setMenu(false)}>
                      Logout
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/">
                    <li className={`px-4 py-1 ${path === "/" ? 'bg-color-blue' : ''}`} onClick={() => setMenu(false)}>
                      Login
                    </li>
                  </Link>
                  <Link to="/signup">
                    <li className={`px-4 py-1 ${path === "/signup" ? 'bg-color-blue' : ''}`} onClick={() => setMenu(false)}>
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
