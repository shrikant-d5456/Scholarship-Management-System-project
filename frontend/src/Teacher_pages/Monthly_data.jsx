import React from "react";
import { BsDatabaseFillAdd } from "react-icons/bs";

const Monthly_data = () => {

  let srNo = 0; 
  const arr =[
    {
      rollno:'0001',
      name:'student1',
      class:'8',
      section:'A',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1">
          <div className="bg-white p-4 rounded shadow">
            
          <h2 className="lg:text-xl text-lg font-bold py-2 mb-6 active flex justify-start items-center gap-2">
          <BsDatabaseFillAdd/> Add Monthly Practice Exam Marks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
              <div>
                <label className="block mb-2">Running Session</label>
                <select className="w-full p-2 border rounded bg-faint-orange">
                  <option>2023-24</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Select Class</label>
                <select className="w-full p-2 border rounded bg-faint-orange">
                  <option>Select Class</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Select Section</label>
                <select className="w-full p-2 border rounded bg-faint-orange">
                  <option>Select Section</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Select School</label>
                <select className="w-full p-2 border rounded bg-faint-orange">
                  <option>Select School</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Total Students</label>
                <input
                  type="number"
                  value="200"
                  className="w-full p-2 border rounded bg-faint-orange"
                  readOnly
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <input
                type="text"
                placeholder="Search Student Name"
                className="p-2 border rounded mb-2 md:mb-0 md:mr-2 flex-1"
              />
              <input
                type="text"
                placeholder="Search Roll No."
                className="p-2 border rounded flex-1"
              />
            </div>
            <div className="overflow-x-scroll w-full">
              <table className="md:w-full w-[800px] text-center bg-white">
                <thead className="bg-faint-orange">
                  <tr>
                    <th className="p-2 border">Sr.No</th>
                    <th className="p-2 border">Full Name</th>
                    <th className="p-2 border">Class</th>
                    <th className="p-2 border">Roll no</th>
                    <th className="p-2 border">Section</th>
                    <th className="p-2 border">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {arr.map((element,index)=>(
                    <tr key={index}>
                    <td className="p-2 border">{++srNo}</td>
                    <td className="p-2 border">{element.name}</td>
                    <td className="p-2 border">{element.class} th</td>
                    <td className="p-2 border">{element.rollno}</td>
                    <td className="p-2 border">{element.section}</td>
                    <td className="p-2 border">
                      <input
                        type="text"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm  sm:text-sm"
                      />
                    </td>
                  </tr>
                  ))}
                  
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="px-4 py-1 border border-transparent text-base font-medium rounded shadow-sm text-white btn">
                Save Marks
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Monthly_data;
