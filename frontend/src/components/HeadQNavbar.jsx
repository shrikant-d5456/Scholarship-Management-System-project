import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsJustify, BsClipboardDataFill, BsGrid1X2Fill, BsBell, BsJournalText } from "react-icons/bs";

const HQNavbar = () => {
  const path = useLocation().pathname;
  const [menu, setMenu] = useState(false);

  const icons = {
    BsClipboardDataFill: BsClipboardDataFill,
    BsGrid1X2Fill: BsGrid1X2Fill,
   BsBell:BsBell,
   BsJournalText:BsJournalText,
  };

  const arr = [
    {
      path_icon:"BsGrid1X2Fill",
      path_name:"Dashboard",
      path_link :"/teacher-dash/",
    },
    {
      path_icon: "BsJournalText",
      path_name: "View Submission Status",
      path_link: "/headquarter-dash/view_status",
    },
    {
      path_icon: "BsClipboardDataFill",
      path_name: "View Details Reports",
      path_link: "/headquarter-dash/student_data",
    },
    {
      path_icon: "BsBell",
      path_name: "Notification & Alters",
      path_link: "/headquarter-dash/notify",
    },

  ]

  return (
    <>
      <div className='flex justify-center items-center text-sm'>
        <div className='w-full bg-[#152259] text-white font-semibold flex justify-between items-center py-[8px] px-4 border-b-[1px] border-white'>

       
          <div className='flex text-lg items-center justify-center gap-2'>

          {/* this sidebar only for mobile device | descktop sidebar in dashboard */}
            <button onClick={() => setMenu(!menu)}>
              <BsJustify className='md:hidden block' />
            </button>

            Navbar
          </div>

          <div className='flex justify-center items-center gap-4'>
          <p className="md:block hidden">Admin_Username123456789</p>
            
            <Link to="/headquarter-dash/edit_profile">
            <span onClick={() => setMenu(false)} className='flex w-8 h-8 rounded-full' title='Edit Profile'>
              <img className='w-full h-full object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&s" alt="admin" />
            </span>
            </Link>

            <Link to='/headquarter-dash/notify'>
            <BsBell onClick={() => setMenu(false)} className='text-xl'title="Notifications" />
            </Link>
            
          </div>

        </div>
      </div>

    {/* side menu for mobile device */}
      {menu && (
        <div className='absolute w-full z-10'>
          <div className='w-full h-screen bg-[#152259] text-white text-sm font-semibold'>

            {arr.map((element, index) => (

              <Link to={element.path_link}>
                <li key={index} onClick={() => setMenu(false)} className={`w-full flex gap-4 justify-start items-center py-2 pl-5 rounded-sm ${path === element.path_link ? 'active2' : ''}`}>
                  {icons[element.path_icon] && React.createElement(icons[element.path_icon], { className: 'icon-class' })}
                  {element.path_name}                
                </li>
              </Link>

            ))}

          </div>
        </div>
      )}
    </>
  );
}

export default HQNavbar;
