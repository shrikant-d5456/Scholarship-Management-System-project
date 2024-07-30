import React from 'react';
import { Route, Routes, Link , useLocation} from 'react-router-dom';
import { BsBank, BsClipboardDataFill, BsDatabaseFillAdd, BsFileEarmarkArrowUpFill, BsPersonVcardFill, BsSliders2, BsGrid1X2Fill } from "react-icons/bs";
import Navbar from './TeachNavbar';
import Student_data from '../Teacher_pages/Student_data';
import Monthly_data from '../Teacher_pages/Monthly_data';
import Submission_status from '../HeadQ_pages/Submission_status';
import Upload_ans_sheet from '../Teacher_pages/Upload_ans_sheet';
import View_student from '../Teacher_pages/View_student';
import Dashboard from '../HeadQ_pages/Dashboard';
import EditProfile from '../Teacher_pages/EditProfile';
import Notify from '../Teacher_pages/Notify';


const TDashboard = () => {

  const path = useLocation().pathname;


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
      path_icon:"BsClipboardDataFill",
      path_name:"Add Student Data",
      path_link :"/teacher-dash/student_data",
    },
    {
      path_icon:"BsPersonVcardFill",
      path_name:"View Students",
      path_link :"/teacher-dash/view_students",
    },
    {
      path_icon:"BsDatabaseFillAdd",
      path_name:"Add Monthly Practice Exam Marks",
      path_link :"/teacher-dash/monthly_data",
    },
    {
      path_icon:"BsBank",
      path_name:"View Submission Status (Principal)",
      path_link :"/teacher-dash/submission_status",
    },
    {
      path_icon:"BsFileEarmarkArrowUpFill",
      path_name:"Upload Answer Sheet",
      path_link :"/teacher-dash/upload_ans_sheet",
    },
    // {
    //   path_icon:"BsSliders2",
    //   path_name:"Setting",
    //   path_link :"/teacher-dash/setting",
    // },
  ]

  return (
    <>
      <Navbar />

      <div className='w-full flex text-black'>
        <div className='md:block hidden w-[300px] h-screen bg-[#152259] text-white text-sm font-semibold'>
          
          {arr.map((element,index)=>
          (
            <ul key={index} className='p-1'>

              <Link to={element.path_link}>
                  <li  className={`w-full flex gap-2 justify-start items-center py-2 px-2 rounded-sm 
                            ${path === element.path_link ? 'active2 ' : ''}`}
                  >
                   {icons[element.path_icon] && React.createElement(icons[element.path_icon], { className: 'icon-class' })}
                   {element.path_name}
                  </li>
              </Link>

          </ul>
          ))}          

        </div>

        <div className='md:w-[80%] lg:h-screen w-full md:p-2 overflow-y-scroll scroll-smooth'>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/student_data" element={<Student_data />} />
            <Route path="/monthly_data" element={<Monthly_data />} />
            <Route path="/submission_status" element={<Submission_status />} />
            <Route path="/upload_ans_sheet" element={<Upload_ans_sheet />} />
            <Route path="/view_students" element={<View_student />} />
            <Route path="/edit_profile" element={<EditProfile />} />
            <Route path="/notify" element={<Notify />} />

          </Routes>
        </div>
      </div>

    </>
  );
}

export default TDashboard;
