import React from "react";

const View_student = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1 p-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center active">Student View</h2>
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
                    <td className="p-2 border flex space-x-2">
                      <button className="bg-yellow-500 text-white px-2 py-1 rounded">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-2 py-1 rounded">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default View_student;
