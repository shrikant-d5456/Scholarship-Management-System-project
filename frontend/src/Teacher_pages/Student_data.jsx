// components/StudentRegistrationForm.jsx
import React from 'react'
import { BsClipboard2DataFill } from 'react-icons/bs'

const Student_data = () => {
  return (
    <div className="flex justify-center items-center bg-aliceblue">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full ">
      <h2 className="lg:text-xl text-lg font-bold py-2 mb-6 active flex justify-start items-center gap-2">
      <BsClipboard2DataFill/> Student Registration
      </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="mt-1 p-1 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              className="mt-1 p-1 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">School Name</label>
            <input
              type="text"
              className="mt-1 p-1 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact</label>
            <input
              type="tel"
              className="mt-1 p-1 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">School ID</label>
            <input
              type="text"
              className="mt-1 p-1 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              className="mt-1 p-1 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Class</label>
            <input
              type="text"
              className="mt-1 p-1 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Parent</label>
            <input
              type="text"
              className="mt-1 p-1 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Roll No.</label>
            <input
              type="text"
              className="mt-1 p-1 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Hostel</label>
            <input
              type="text"
              className="mt-1 p-1 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="mt-1 p-1 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Upload Image</label>
            <input
              type="file"
              className="mt-1 p-1 block w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Select Year</label>
            <select
              className="mt-1 p-1 block w-full border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="mt-4 w-1/3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#269CFF] hover:bg-[#028dff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active3"
            >
              Add Student Data
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Student_data