import React from 'react';
import { BsGrid1X2Fill, BsMortarboardFill, BsPersonLinesFill, BsHourglassSplit, BsCheckCircleFill, BsFileXFill } from 'react-icons/bs';

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

  return (
    <div className='p-4 bg-white shadow-md'>
      <h2 className="lg:text-xl text-lg active font-bold text-blue-400 py-2 mb-6 flex justify-start items-center gap-2">
        <BsGrid1X2Fill /> Dashboard
      </h2>
      <hr />

      <div className='p-4 bg-sky-100'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
          {array.map((element, index) => (
            <div key={index} className='bg-white flex justify-between items-center py-2 px-4 gap-2 rounded-sm shadow-sm'>
              <div>
                <p className='text-md'>{element.label_name}</p>
                <p className='text-lg font-semibold'>{element.value}</p>
              </div>
              <div>
                {icons[element.icon] && React.createElement(icons[element.icon], { className: `text-xl ${element.color}` })}
              </div>
            </div>
          ))}
        </div>

        <div className='grid lg:grid-cols-2 grid-cols-1 my-4 gap-4'>
          <div className='bg-white p-2'>Graph 1</div>
          <div className='bg-white p-2'>Graph 2</div>
        </div>

        <div className='bg-white p-2'>Graph 3</div>
      </div>
    </div>
  );
};

export default Dashboard;
