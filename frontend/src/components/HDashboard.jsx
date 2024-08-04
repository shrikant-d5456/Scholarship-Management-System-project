import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { BsClipboardDataFill, BsGrid1X2Fill, BsBell, BsJournalText } from "react-icons/bs";
import Dashboard from '../HeadQ_pages/Dashboard'
import HeadQNavbar from './HeadQNavbar'
import DetailsReport from '../HeadQ_pages/DetailsReports'
import Submission_status from '../HeadQ_pages/Submission_status';
import EditProfile from '../Teacher_pages/EditProfile';
import Notify from '../Teacher_pages/Notify';


const HDashboard = () => {

  const path = useLocation().pathname;

  const icons = {

    BsGrid1X2Fill: BsGrid1X2Fill,
    BsClipboardDataFill: BsClipboardDataFill,
    BsBell: BsBell,
    BsJournalText:BsJournalText,
  };

  const arr = [
    {
      path_icon:"BsGrid1X2Fill",
      path_name:"Dashboard",
      path_link :"/headquarter-dash/",
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
      <HeadQNavbar />

      <div className='w-full flex text-black'>
        <div className='md:block hidden w-[300px] h-screen bg-color-blue-dark text-white text-sm font-semibold'>

          {/* sideber Dashboard */}

          {arr.map((element, index) =>
          (
            <ul key={index} className='p-1'>

              <Link to={element.path_link}>
                <li className={`w-full flex gap-2 justify-start items-center py-2 px-2 rounded-sm 
                            ${path === element.path_link ? 'active2 ' : ''}`}
                >
                  {icons[element.path_icon] && React.createElement(icons[element.path_icon], { className: 'icon-class' })}
                  {element.path_name}
                </li>
              </Link>

            </ul>
          ))}

        </div>

        {/* display content when click on sidebar menu */}

        <div className='md:w-[80%] lg:h-screen w-full md:p-2 overflow-y-scroll scroll-smooth'>
          <Routes>
          
            <Route path="/" element={<Dashboard />} />
            <Route path="/view_status" element={<Submission_status />} />
            <Route path="/student_data" element={<DetailsReport/>} />
            <Route path="/submission_status" element={<Submission_status />} />
            <Route path="/edit_profile" element={<EditProfile />} />
            <Route path="/notify" element={<Notify />} />
          </Routes>
        </div>
      </div>

    </>
  );
}

export default HDashboard;
