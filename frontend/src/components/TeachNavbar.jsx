import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsJustify, BsBank, BsClipboardDataFill, BsDatabaseFillAdd, BsFileEarmarkArrowUpFill, BsPersonVcardFill, BsSliders2, BsGrid1X2Fill, BsBell } from "react-icons/bs";

const Navbar = () => {
  const path = useLocation().pathname;
  const [menu, setMenu] = useState(false);

  const icons = {
    BsClipboardDataFill: BsClipboardDataFill,
    BsDatabaseFillAdd: BsDatabaseFillAdd,
    BsFileEarmarkArrowUpFill: BsFileEarmarkArrowUpFill,
    BsPersonVcardFill: BsPersonVcardFill,
    BsSliders2: BsSliders2,
    BsBank: BsBank,
    BsGrid1X2Fill:BsGrid1X2Fill,
  };

  const arr = [
    {
      path_icon:"BsGrid1X2Fill",
      path_name:"Dashboard",
      path_link :"/teacher-dash/",
    },
    {
      path_icon: "BsClipboardDataFill",
      path_name: "Add Student Data",
      path_link: "/teacher-dash/student_data",
    },
    {
      path_icon: "BsPersonVcardFill",
      path_name: "View Students",
      path_link: "/teacher-dash/view_students",
    },
    {
      path_icon: "BsDatabaseFillAdd",
      path_name: "Add Monthly Practice Exam Marks",
      path_link: "/teacher-dash/monthly_data",
    },
    {
      path_icon: "BsBank",
      path_name: "View Submission Status (Principal)",
      path_link: "/teacher-dash/submission_status",
    },
    {
      path_icon: "BsFileEarmarkArrowUpFill",
      path_name: "Upload Answer Sheet",
      path_link: "/teacher-dash/upload_ans_sheet",
    },
  ]


  return (
    <>
      <div className='flex justify-center items-center text-sm'>
        <div className='w-full bg-[#152259] text-white font-semibold flex justify-between items-center py-[8px] px-4 border-b-[1px] border-white'>

       
          <div className='flex text-lg items-center justify-center gap-2'>
            
            <button onClick={() => setMenu(!menu)}>
              <BsJustify className='md:hidden block' />
            </button>

            Navbar
          </div>

          <div className='flex justify-center items-center gap-4'>
          <p className="md:block hidden">Admin_Username123456789</p>
            
            <Link to="/teacher-dash/edit_profile">
            <span onClick={() => setMenu(false)} className='flex w-8 h-8 rounded-full' title='Edit Profile'>
              <img className='w-full h-full object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&s" alt="admin" />
            </span>
            </Link>

            <Link to='/teacher-dash/notify'>
            <BsBell onClick={() => setMenu(false)} className='text-xl'title="Notifications" />
            </Link>
            
          </div>

        </div>
      </div>

    {/* this sidebar only for mobile device | descktop sidebar in dashboard */}
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

export default Navbar;
