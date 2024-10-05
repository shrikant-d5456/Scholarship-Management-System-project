import React, { useEffect, useState } from 'react';
import { BsPersonFillLock, BsKeyFill, BsEnvelopeArrowUpFill, BsGeoAltFill, BsBank, BsPhone } from 'react-icons/bs'


const EditProfile = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneno, setphoneno] = useState('');
    const [formattedDateTime, setFormattedDateTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const currentDate = new Date();
            const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
            const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
            setFormattedDateTime(`${formattedDate} ${formattedTime}`);
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div className='lg:flex flex-col bg-white shadow-sm rounded-md w-full justify-citems-cgap-5 p-4 text-sm'>

            <div className='w-full'>
                <p className='text-2xl font-semibold my-2 text-[#269CFF]'>Welcome, {username}</p>
                <p className='text-gray-400'>{formattedDateTime}</p>
                
            </div>


            <div className=' flex gap-4 w-full justify-start items-center rounded border-b-2 border-t-2 my-4'
            >
                <div className='flex lg:w-20 lg:h-20 w-10 h-10 my-2 rounded-full border-[2px] border-blue-400'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&s" className='flex lg:w-full h-full rounded-full ' alt="" />
                </div>

                <div>
                    <p className='lg:text-lg font-semibold'>Username : {username}</p>
                    <p className='text-gray-400'>Email: {email}</p>
                </div>

            </div> 
            

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 w-full '>
                <InputField name={"Username"} placeholder={"UserName"} value={username} onChange type="text" icon={<BsPersonFillLock />} />
                <InputField name={"School Email"} placeholder={"Email"} value={email} onChange type="text" icon={<BsEnvelopeArrowUpFill />} />
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 w-full'>
                <InputField name={"Password"} placeholder={"Password"} value={password} onChange type="text" icon={<BsKeyFill />} />
                <InputField name={"School Name"} placeholder={"School Name"} value={password} onChange type="text" icon={<BsBank />} />
            </div>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 w-full'>
                <InputField name={"School Address"} placeholder={"Address"} value={address} onChange type="text" icon={<BsGeoAltFill />} />
                <InputField name={"Phone No."} placeholder={"Phone No"} value={phoneno} onChange type="text" icon={<BsPhone />} />
            </div>

            <button className='btn w-1/3 self-center px-4 py-2 text-white rounded-sm my-4 font-semibold'>Update</button>

        </div>
    );
}


const InputField = ({ name, placeholder, value, onChange, type = "text", icon }) => {
    return (
        <div className='text-start w-full py-1'>

            <p className='py-1'>{name}</p>
            <div className="px-3 py-2 bg-white rounded w-full flex items-cgap-3 border-[0.1px] border-[#0000f]">
                {icon && <span className="text-lg opacity-40 mr-4  ">{icon}</span>}
                <input
                    type={type} placeholder={placeholder}
                    className="outline-none w-full opacity-100"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}


export default EditProfile
