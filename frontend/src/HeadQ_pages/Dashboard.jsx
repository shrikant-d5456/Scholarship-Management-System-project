import React, { useState } from 'react';
import { BsGrid1X2Fill, BsMortarboardFill, BsPersonLinesFill, BsHourglassSplit, BsCheckCircleFill, BsFileXFill, BsChatText, BsTrash, BsPlusCircle, BsPlusCircleFill, BsSend, BsSendFill } from 'react-icons/bs';
import Modal from "react-modal"

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
      value: 100,
      icon: "BsMortarboardFill",
      color: "text-blue-700"
    },
  ];

  const topStudent = [
    { studentName: "सागर देशमुख", schoolName: "श्री समर्थ विद्यालय" },
    { studentName: "पायल जाधव", schoolName: "विद्या मंदिर इंग्लिश स्कूल" },
    { studentName: "प्रियांका शिंदे", schoolName: "शारदा विद्यालय" },
    { studentName: "ओमकार भोसले", schoolName: "महात्मा गांधी विद्यालय" },
    { studentName: "स्नेहा पाटील", schoolName: "स्वामी विवेकानंद स्कूल" },
    { studentName: "रोहन चौधरी", schoolName: "शिवाजी विद्यालय" },
    { studentName: "मिताली इनामदार", schoolName: " आदर्श इंग्लिश मीडियम स्कूल" },
    { studentName: "अर्जुन पवार", schoolName: "जय हिंद विद्यालय" },
    { studentName: "पायल पाटील", schoolName: "शारदा विद्यालय" },
    { studentName: "कविता माळी", schoolName: "नवजीवन विद्यालय" }
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
  const [file, setFile] = useState(null);
  const [notice, setNotice] = useState('');
  const [notices, setNotices] = useState([
    {
      notice:
        'नोंदणीची अंतिम तारीख: सर्व विद्यार्थ्यांनी 15 जून 2024 पूर्वी शिष्यवृत्ती परीक्षेसाठी नोंदणी पूर्ण करावी. उशिराने आलेल्या नोंदणी फॉर्मचा स्वीकार केला जाणार नाही.',
      file: '',
    },
  ]);


  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSend = () => {
    if (!file && notice.trim() === '') {
      alert('Please enter a notice or upload a file before sending!');
      return;
    }

    const fileUrl = file ? URL.createObjectURL(file) : '';

    setNotices([...notices, { notice, file: fileUrl }]);
    setNotice('');
    setAdd(false);
    setFile(null);
  };

  const handleDelete = (index) => {
    setNotices(notices.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex justify-between items-center p-1 active2 font-semibold overflow-hidden">
        <p>Notice Board</p>
        <p
          onClick={() => setAdd(true)}
          className="cursor-pointer font-semibold text-lg flex justify-end mx-2 p-1"
        >
          <BsPlusCircleFill />
        </p>

        {add && (
          <Modal
            isOpen={true}
            className="modalcss md:h-fit h-screen overflow-scroll"
          >
            <textarea
              placeholder="Enter Notice Here.."
              value={notice}
              onChange={(e) => setNotice(e.target.value)}
              className="w-full p-1 font-normal outline-none border-[1px] border-black h-[40px] text-black"
            />
            <br />
            <p className="font-semibold my-2">Upload Notice Here:</p>
            <input type="file" onChange={handleFileUpload} />

            <div className="flex justify-end my-4 gap-4">
              <button
                onClick={handleSend}
                className="px-4 py-1 border-[1px] text-white bg-green-500 shadow-md"
              >
                Hosted
              </button>
              <button
                onClick={() => setAdd(false)}
                className="btn text-white px-4 py-1 shadow-md"
              >
                Close
              </button>
            </div>
          </Modal>
        )}
      </div>

      <marquee
        direction="up"
        scrollamount="1"
        className="relative h-[450px]"
      >
        {notices.map((item, index) => (
          <div
            key={index}
            className=" w-full my-1 flex gap-2 justify-start items-center border-b-2 py-1"
          >
            <div className="w-[45px] h-[40px] rounded-full flex justify-center items-center">
              <BsChatText className="text-xl text-yellow-400" />
            </div>

            <div className="w-full">
              <p>{item.notice}</p>
              {item.file && (
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View PDF
                </a>
              )}
              <div className="flex justify-end items-center mx-4">
                <BsTrash
                  className="text-xl text-red-500 cursor-pointer"
                  onClick={() => handleDelete(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </marquee>

      
    </>
  );
};
