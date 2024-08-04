import React from "react";
import { BsDatabaseFillAdd } from "react-icons/bs";

const Submission_status = () => {
  let srNo = 0;
  const arr = [
    {
      name: 'School name',
      submission: "140/140",
      status: 'complited',
      reason: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      name: 'School name',
      submission: "140/140",
      status: 'complited',
      reason: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <main className="flex-1">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="lg:text-xl text-lg font-bold py-2 mb-6 active flex justify-start items-center gap-2">
              <BsDatabaseFillAdd /> View Submission status
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
                <label className="block mb-2">Select Month</label>
                <select className="w-full p-2 border rounded bg-faint-orange">
                  <option>Select Month</option>
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


            <div className="overflow-x-scroll w-full ">
              <table className="md:w-full w-[800px] my-8 text-center bg-white">
                <thead className="bg-faint-orange">
                  <tr>
                    <th className="p-2 border"> Sr.No</th>
                    <th className="p-2 border"> School Name</th>
                    <th className="p-2 border">Submission</th>
                    <th className="p-2 border">Status</th>
                    <th className="p-2 border">Reason</th>

                  </tr>
                </thead>
                <tbody>
                  {arr.map((element, index) => (
                    <tr key={index}>
                      <td className="p-2 border">{++srNo}</td>
                      <td className="p-2 border">{element.name}</td>
                      <td className="p-2 border">{element.submission} </td>
                      <td className="p-2 border">{element.status}</td>
                      <td className="p-2 border">{element.reason}</td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Submission_status;
