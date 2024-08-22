import React, { useState } from 'react';
import { BsGrid1X2Fill, BsMortarboardFill, BsPersonLinesFill, BsHourglassSplit, BsCheckCircleFill, BsFileXFill, BsChatText, BsTrash, BsPlusCircle, BsPlusCircleFill, BsSend, BsSendFill } from 'react-icons/bs';

const Dashboard = () => {
  const icons = {
    BsMortarboardFill: BsMortarboardFill,
    BsPersonLinesFill: BsPersonLinesFill,
    BsHourglassSplit: BsHourglassSplit,
    BsCheckCircleFill: BsCheckCircleFill,
    BsFileXFill: BsFileXFill
  };

  const array = [
    {
      label_name: "Total Schools",
      value: 150,
      icon: "BsMortarboardFill",
      color: "text-blue-500"
    },
    {
      label_name: "Total Students",
      value: 3000,
      icon: "BsPersonLinesFill",
      color: "text-green-500"
    },
    {
      label_name: "Pending Applications",
      value: 50,
      icon: "BsHourglassSplit",
      color: "text-yellow-500"
    },
    {
      label_name: "Approved Applications",
      value: 1450,
      icon: "BsCheckCircleFill",
      color: "text-green-700"
    },
    {
      label_name: "Rejected Applications",
      value: 100,
      icon: "BsFileXFill",
      color: "text-red-500"
    },
    {
      label_name: " Scholarship % of previous months ",
      value: 200,
      icon: "BsMortarboardFill",
      color: "text-blue-700"
    },
  ];

  const topStudent = [
    { studentName: "Alice Johnson", schoolName: "Greenwood High School" },
    { studentName: "Michael Brown", schoolName: "Sunrise Academy" },
    { studentName: "Sophia Davis", schoolName: "Riverside Public School" },
    { studentName: "James Wilson", schoolName: "Hilltop School" },
    { studentName: "Emily Martinez", schoolName: "Blue Valley School" },
    { studentName: "Oliver Garcia", schoolName: "Meadowbrook High" },
    { studentName: "Ava Robinson", schoolName: "Pinecrest School" },
    { studentName: "William Clark", schoolName: "Lakeside Academy" },
    { studentName: "Isabella Lee", schoolName: "Silver Oak School" },
    { studentName: "Liam Walker", schoolName: "Sunnydale High" }
  ];


  return (
    <div className='lg:p-4 p-2 bg-white shadow-md'>
      <h2 className="lg:text-xl text-lg active font-bold text-blue-400 py-2 mb-6 flex justify-start items-center gap-2">
        <BsGrid1X2Fill /> Dashboard
      </h2>
      <hr />

      <div className='lg:p-4 p-2 bg-faint-orange'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
          {array.map((element, index) => (
            <div key={index} className='bg-white flex justify-between items-center py-2 px-4 gap-2 rounded-sm shadow-sm'>
              <div>
                <p className='text-md'>{element.label_name}</p>
                <p className='text-lg font-semibold'>{element.value}</p>
              </div>
              <div>
                {icons[element.icon] && React.createElement(icons[element.icon], { className: `text-2xl ${element.color}` })}
              </div>
            </div>
          ))}
        </div>

        <div className='relative grid lg:grid-cols-2 grid-cols-1 my-4 gap-4'>

          <div className='bg-white p-2'>
            <p className=' active2 p-2 font-semibold '>Top 10 student Performance in Scholarship exam</p>
            {topStudent.map((student, index) => (
              <div key={index} className=' my-1 flex gap-4 justify-start items-center border-2 border-orange-200'>
                <div className=' bg-orange-200 py-2 px-4 mx-[2px]'>
                  {index + 1}
                </div>
                <div>
                  <p>{student.studentName}</p>
                  <p className='text-[11px] text-gray-600'>{student.schoolName}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='bg-white p-2 '>
            <Notice />
          </div>

        </div>

        <div className='relative grid lg:grid-cols-2 grid-cols-1 my-4 gap-4'>
          <div className='bg-white p-2'>Graph 1</div>
          <div className='bg-white p-2'>Graph 2</div>
        </div>

        <div className='bg-white p-2'>Graph 3</div>
      </div>
    </div>
  );
};

export default Dashboard;




const Notice = () => {

  const [add, setAdd] = useState(false);
  const [notice, setNotice] = useState('');
  const [notices, setNotices] = useState([
    
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque autem magnam saepe distinctio repellat itaque vero sint consectetur maiores sunt.',
    "notice 2",
  ]);

  const handleSend = () => {
    if (notice.trim() !== "") {
      setNotices([...notices, notice]);
      setNotice('');
      setAdd(false);
    } else {
      alert("Please enter a notice before sending!");
    }
  };

  const handleDelete = (index) => {
    setNotices(notices.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className='flex justify-between items-center p-2 active2 font-semibold overflow-hidden'>
        {add ? (
          <textarea
            placeholder='Enter Notice Here..'
            value={notice}
            onChange={(e) => setNotice(e.target.value)}
            className='w-full p-1 font-normal outline-none h-[40px] text-black'
          />
        ) : (
          <p>Notice Board</p>
        )}
        {add ? (
          <p onClick={handleSend} className='cursor-pointer font-semibold text-lg flex justify-end mx-2 p-1'><BsSendFill/></p>
        ) : (
          <p onClick={() => setAdd(true)} className='cursor-pointer font-semibold text-xl'><BsPlusCircleFill/></p>
        )}
      </div>

   
        <marquee direction="up" scrollamount="2"  className="relative h-[60vh] " >
        {notices.map((notice, index) => (
          
          <div key={index} className=' w-full my-1 flex gap-2 justify-start items-center border-b-2 py-1'>
            <div className='w-[45px] h-[40px] rounded-full flex justify-center items-center'>
              <BsChatText className='text-xl text-yellow-400' />
            </div>

            <div className='w-full'>
              <p className=''>{notice}</p>
              <div className='flex justify-end items-center mx-4'>
                <BsTrash
                  className='text-xl text-red-500 cursor-pointer'
                  onClick={() => handleDelete(index)}
                />
              </div>
              
          
          </div>
            
            

          </div>
        ))}
        </marquee>
     
    </>
  );

}

}
