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
      value: 100,
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
    'नोंदणीची अंतिम तारीख: सर्व विद्यार्थ्यांनी 15 जून 2024 पूर्वी शिष्यवृत्ती परीक्षेसाठी नोंदणी पूर्ण करावी. उशिराने आलेल्या नोंदणी फॉर्मचा स्वीकार केला जाणार नाही.',
    'पात्रता निकष: महाराष्ट्रातील निवडलेल्या 150 शाळांमधील केवळ इयत्ता 8 वीचे विद्यार्थी या परीक्षेस पात्र आहेत.',
    'अभ्यासक्रम: शिष्यवृत्ती परीक्षा इयत्ता 8 वीच्या पाठ्यक्रमावर आधारित असेल. यामध्ये गणित, विज्ञान आणि सामान्य ज्ञान यांचा समावेश असेल.',
    'परीक्षेची तारीख: शिष्यवृत्ती परीक्षा 30 जून 2024 रोजी आयोजित केली आहे. विद्यार्थ्यांनी परीक्षा केंद्रावर परीक्षेच्या 30 मिनिटे अगोदर उपस्थित रहावे.',
    'प्रवेशपत्र: प्रवेशपत्र 25 जून 2024 पासून डाउनलोड करण्यासाठी उपलब्ध असतील. परीक्षेच्या दिवशी विद्यार्थ्यांनी प्रवेशपत्रासोबत वैध शाळेचा ओळखपत्र बरोबर आणणे आवश्यक आहे.',
    'उत्तरपत्रिका स्वरूप: उत्तरपत्रिका OMR आधारित असेल. उत्तरपत्रिकेत फक्त काळ्या किंवा निळ्या बॉलपॉईंट पेनचा वापर करावा.',
    'सराव परीक्षा: सराव परीक्षा ऑनलाईन उपलब्ध असतील. विद्यार्थी त्यांच्या तयारीसाठी मॉक टेस्ट देण्याचे प्रोत्साहन दिले जाते.',
    'शिष्यवृत्ती पुरस्कार: परीक्षेतील सर्वोत्तम कामगिरी करणाऱ्या विद्यार्थ्यांना शिष्यवृत्ती प्रदान केली जाईल. पुरस्कारांची माहिती परीक्षा झाल्यानंतर जाहीर केली जाईल.',
    'निकाल: निकाल 10 जुलै 2024 रोजी जाहीर केला जाईल आणि अधिकृत पोर्टलवर प्रकाशित केला जाईल.',
    'सहाय्यता केंद्र: परीक्षा किंवा नोंदणी प्रक्रियेबद्दल कोणत्याही शंका किंवा तांत्रिक सहाय्यासाठी, विद्यार्थी [संपर्क क्रमांक] वर संपर्क साधू शकतात.',
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

   
        <marquee direction="up" scrollamount="2"  className="relative h-[450px] " >
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

