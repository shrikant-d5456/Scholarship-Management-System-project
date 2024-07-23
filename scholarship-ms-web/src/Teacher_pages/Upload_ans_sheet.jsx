import React from "react";
<<<<<<< HEAD
import { BsFileEarmarkArrowUpFill } from "react-icons/bs";
=======
>>>>>>> 6e4818aa88a09830a0dd6fe87235b24805e42811

const Upload_ans_sheet = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
<<<<<<< HEAD
        <main className="flex-1 ">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold py-2 mb-6 active flex gap-4">
            <BsFileEarmarkArrowUpFill/> Upload Answer Sheet
=======
        <main className="flex-1 p-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center active">
              Upload Answer Sheet
>>>>>>> 6e4818aa88a09830a0dd6fe87235b24805e42811
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
              <div>
                <label className="block mb-2">Running Session</label>
<<<<<<< HEAD
                <select className="w-full p-2 border rounded bg-sky-100">
=======
                <select className="w-full p-2 border rounded">
>>>>>>> 6e4818aa88a09830a0dd6fe87235b24805e42811
                  <option>2023-24</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Select Class</label>
<<<<<<< HEAD
                <select className="w-full p-2 border rounded bg-sky-100">
=======
                <select className="w-full p-2 border rounded">
>>>>>>> 6e4818aa88a09830a0dd6fe87235b24805e42811
                  <option>Select Class</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Select Section</label>
<<<<<<< HEAD
                <select className="w-full p-2 border rounded bg-sky-100">
=======
                <select className="w-full p-2 border rounded">
>>>>>>> 6e4818aa88a09830a0dd6fe87235b24805e42811
                  <option>Select Section</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Select School</label>
<<<<<<< HEAD
                <select className="w-full p-2 border rounded bg-sky-100">
=======
                <select className="w-full p-2 border rounded">
>>>>>>> 6e4818aa88a09830a0dd6fe87235b24805e42811
                  <option>Select School</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Total Students</label>
                <input
                  type="number"
                  value="200"
<<<<<<< HEAD
                  className="w-full p-2 border rounded bg-sky-100"
=======
                  className="w-full p-2 border rounded"
>>>>>>> 6e4818aa88a09830a0dd6fe87235b24805e42811
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
<<<<<<< HEAD
            <div className="overflow-x-scroll w-full">
            <table className="md:w-full w-[800px] text-center bg-white">
              <thead className="bg-sky-100">
=======
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
>>>>>>> 6e4818aa88a09830a0dd6fe87235b24805e42811
                  <tr>
                    <th className="p-2 border">Sr.No</th>
                    <th className="p-2 border">Full Name</th>
                    <th className="p-2 border">Class</th>
                    <th className="p-2 border">Roll no</th>
                    <th className="p-2 border">Section</th>
                    <th className="p-2 border">Upload Answer Sheet</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">01</td>
                    <td className="p-2 border">xyz xyz xyz</td>
                    <td className="p-2 border">8th</td>
                    <td className="p-2 border">0001</td>
                    <td className="p-2 border">A</td>
                    <td className="p-2 border">
                      <input
                        type="file"
<<<<<<< HEAD
                        className="mt-1 block w-full py-2 px-3  bg-white rounded-md shadow-sm "
=======
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
>>>>>>> 6e4818aa88a09830a0dd6fe87235b24805e42811
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-end">
<<<<<<< HEAD
            <button className="px-4 py-1 border border-transparent text-base font-medium rounded shadow-sm text-white bg-[#269CFF] hover:bg-[#008cff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Save Data
=======
              <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Save Marks
>>>>>>> 6e4818aa88a09830a0dd6fe87235b24805e42811
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Upload_ans_sheet;
=======
export default Upload_ans_sheet;
>>>>>>> 6e4818aa88a09830a0dd6fe87235b24805e42811
