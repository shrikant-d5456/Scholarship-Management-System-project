import React from 'react'
import { BsMortarboardFill } from 'react-icons/bs';
import Modal from "react-modal";

const StudentInfo = ({ id, closeModal }) => {
    const arr = [
        {
            rollno: '0001',
            class: '8',
            practice_exam: ["jan", 'feb', "march", 'april']
        },
    ];

    return (
        <Modal
            isOpen={true}
            onRequestClose={closeModal}
            className="modalcss md:h-fit h-screen overflow-scroll"
        >
            <div className='p-4  bg-white w-full max-w-4xl mx-auto shadow-xl'>
                <div className='w-full'>
                    <p className='text-xl font-semibold my-2 flex justify-start items-center active gap-2'>
                        <BsMortarboardFill /> Student Details
                    </p>

                    <div className='flex flex-col lg:flex-row justify-start items-center'>
                        <div className='w-full lg:w-1/5 p-2 rounded-full'>
                            <img
                                src="https://cdn.vectorstock.com/i/preview-1x/34/20/smiling-graduate-student-vector-11443420.jpg"
                                className='w-full h-full object-cover rounded-full'
                                alt="Student"
                            />
                        </div>

                        <div className='w-full lg:w-2/5 p-2'>
                            <p className='text-md my-1 font-semibold text-blue-400'>Name :  
                                <span className='font-normal text-black'> firstName middleName sirName</span>
                            </p>
                            <p className='text-md my-1 font-semibold text-blue-400'>Email :  
                                <span className='font-normal text-black'> admin@domainname.com</span>
                            </p>
                            <p className='text-md my-1 font-semibold text-blue-400'>School City :  
                                <span className='font-normal text-black'>Lorem ipsum dolor sit.</span>
                            </p>
                            <p className='text-md my-1 font-semibold text-blue-400'>School Name :   
                                <span className='font-normal text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, distinctio.  </span>
                            </p>
                        </div>

                        <div className='w-full lg:w-2/5 p-2'>
                            <p className='text-md my-1 font-semibold text-blue-400'>Current Class : 
                                <span className='font-normal text-black'> {arr[0].class} th</span>
                            </p>
                            <p className='text-md my-1 font-semibold text-blue-400'>Gender : 
                                <span className='font-normal text-black'> Male</span>
                            </p>
                            <p className='text-md my-1 font-semibold text-blue-400'>DOB : 
                                <span className='font-normal text-black'> 1/1/2000</span>
                            </p>
                            <p className='text-md my-1 font-semibold text-blue-400'>Parent Name : 
                                <span className='font-normal text-black'> middleName sirName</span>
                            </p>
                            <p className='text-md my-1 font-semibold text-blue-400'>Contact : 
                                <span className='font-normal text-black'> +91 9191919919191</span>
                            </p>
                            <p className='text-md my-1 font-semibold text-blue-400'>Address : 
                                <span className='font-normal text-black'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, rem!</span>
                            </p>
                        </div>
                    </div>

                    <div className="overflow-x-scroll lg:w-full  mt-4">
                        <table className="w-full text-center bg-white">
                            <thead className="bg-sky-100">
                                <tr>
                                    <th className="p-2 border">Class</th>
                                    <th className="p-2 border">Roll no</th>
                                    <th className="p-2 border">Practice Exam Done</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arr.map((element, index) => (
                                    <tr key={index}>

                                        <td className="p-2 border">{element.class} th</td>
                                        <td className="p-2 border">{element.rollno}</td>

                                        <td className="p-2 border">
                                            {element.practice_exam.map((month, i) => (
                                                <p key={i} className='bg-green-200 p-2 my-1'>{month}</p>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='flex justify-end my-4 gap-4'>
                    <button className='px-4 py-1 border-[1px] text-white bg-green-500 shadow-md'>
                        Save
                    </button>
                    <button onClick={closeModal} className='btn text-white px-4 py-1 shadow-md'>
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default StudentInfo;