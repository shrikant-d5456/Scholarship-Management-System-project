import React from "react";

const Upload_ans_sheet = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1 p-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center active">
              Upload Answer Sheet
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
              <div>
                <label className="block mb-2">Running Session</label>
                <select className="w-full p-2 border rounded">
                  <option>2023-24</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Select Class</label>
                <select className="w-full p-2 border rounded">
                  <option>Select Class</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Select Section</label>
                <select className="w-full p-2 border rounded">
                  <option>Select Section</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Select School</label>
                <select className="w-full p-2 border rounded">
                  <option>Select School</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Total Students</label>
                <input
                  type="number"
                  value="200"
                  className="w-full p-2 border rounded"
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
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
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
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Save Marks
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Upload_ans_sheet;
