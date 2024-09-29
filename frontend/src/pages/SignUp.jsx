import { useState } from 'react';
import { BsPersonFillLock,BsKeyFill,BsEnvelopeArrowUpFill, BsGeoAltFill, BsBank, BsPhone } from 'react-icons/bs'
import img1 from "../assets/bgimg.jpg"
import { Link } from 'react-router-dom';

const SignUp = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [address, setAddress] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [phoneno, setphoneno] = useState('');


  return (
    <>
      <div className='flex w-full h-screen bg-white text-center'>
        <div className='w-10/12 h-full lg:flex m-auto'>

          <div className='lg:w-2/3 md:block hidden p-4'>
            <img src={img1} className='w-full h-full object-cover p-8' alt="" />
          </div>

          <div className='lg:w-1/3 flex justify-center items-center'>
            <form className='flex-col w-full'>

              <p className='text-2xl font-bold text-[#269CFF]'>Sign Up</p> <hr className='lg:hidden block my-4 border-[#269CFF]' />  

              <InputField name={"Enter your Username or Teacher ID"} placeholder={"username or Teacher ID"} value={username} onChange type="text" icon={<BsPersonFillLock />} />
              <InputField name={"Email"} placeholder={"Email"} value={email} onChange type="text" icon={<BsEnvelopeArrowUpFill />} />
              <InputField name={"Enter Password"} placeholder={"Password"} value={password} onChange type="text" icon={<BsKeyFill />} />

              <InputField name={"Enter School Name"} placeholder={"School Name"} value={password} onChange type="text" icon={<BsBank />} />
              <InputField name={"Enter School Address"} placeholder={"Address"} value={address} onChange type="text" icon={<BsGeoAltFill />} />
              <InputField name={"Enter Phone No."} placeholder={"Phone No"} value={phoneno} onChange type="text" icon={<BsPhone />} />

              <select id="" className='btn my-4 w-full outline-none text-white py-2 px-4 rounded'>
                <option value="">Select an option</option>
                <option value="teacher">Teacher Or Principal</option>
                <option value="headquarter">Headquarter</option>
                
              </select>

              <button type='submit' className='btn my-4 font-semibold w-full outline-none text-white py-2 px-4 rounded-full'
              >Sign Up
              </button>

              <p>Already you have an account ? <Link to="/" className='text-blue-500 underline'>Login</Link> </p>
              

            </form>
          </div>
        </div>
      </div>
    </>
  )
}



const InputField = ({ name, placeholder, value, onChange, type = "text", icon }) => {
    return (
      <div className='text-start py-1'>
  
        <p className='py-1'>{name}</p>
        <div className="px-3 py-2 bg-white rounded w-full flex items-center gap-3 border-[0.1px] border-[#0000f]">
          {icon && <span className="text-lg opacity-40 ">{icon}</span>}
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
  

export default SignUp
