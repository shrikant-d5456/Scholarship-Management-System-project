import React, { useState } from "react";
import { BsPersonVcardFill } from "react-icons/bs";
import Delete from "../pages/Delete";
import Student_info from "../pages/Student_info";

const View_student = () => {

  const [modalIsOpen1, setIsOpen1] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);

  const [studentId, setStudentId] = useState(null);


  const openModal1 = (id) => {
    setStudentId(id);
    setIsOpen1(true);
  };

  const openModal2 = (id) => {
    setStudentId(id);
    setIsOpen2(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1">
          <div className="bg-white p-4 rounded shadow">
          <h2 className="lg:text-2xl text-lg font-bold py-2 mb-6 active flex justify-start items-center gap-2">
          <BsPersonVcardFill /> Student View
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
              <div>
                <label className="block mb-2">Running Session</label>
                <select className="w-full p-2 border rounded bg-sky-100">
                  <option>2023-24</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Select Class</label>
                <select className="w-full p-2 border rounded bg-sky-100">
                  <option>Select Class</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Select Section</label>
                <select className="w-full p-2 border rounded bg-sky-100">
                  <option>Select Section</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Select School</label>
                <select className="w-full p-2 border rounded bg-sky-100">
                  <option>Select School</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Total Students</label>
                <input
                  type="number"
                  value="200"
                  className="w-full p-2 border rounded bg-sky-100"
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
                <thead className="bg-sky-100">
                  <tr>
                    <th className="p-2 border">Image</th>
                    <th className="p-2 border">Full Name</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Class</th>
                    <th className="p-2 border">Section</th>
                    <th className="p-2 border">Address</th>
                    <th className="p-2 border">Gender</th>
                    <th className="p-2 border">Option</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border text-center">
                      <img
                        src="path/to/image"
                        alt="student"
                        className="h-10 w-10 rounded-full mx-auto"
                      />
                    </td>
                    <td className="p-2 border">xyz xyz xyz</td>
                    <td className="p-2 border">xyz@xyz.com</td>
                    <td className="p-2 border">8th</td>
                    <td className="p-2 border">A</td>
                    <td className="p-2 border">Address any</td>
                    <td className="p-2 border">Gender</td>
                    <td className="p-2 border flex justify-center items-center gap-4">
                      <button 
                      onClick={() => openModal1('studentId')}
                      className="bg-yellow-500 text-white px-2 py-1 my-2 rounded">
                        Edit
                      </button>
                      <button
                        onClick={() => openModal2('studentId')}
                        className="bg-red-500 text-white px-2 py-1 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
        {modalIsOpen1 && <Student_info id={studentId} closeModal={() => setIsOpen1(false)} />}
        {modalIsOpen2 && <Delete id={studentId} closeModal={() => setIsOpen2(false)} />}
      </div>
    </div>
  );
};

export default View_student;