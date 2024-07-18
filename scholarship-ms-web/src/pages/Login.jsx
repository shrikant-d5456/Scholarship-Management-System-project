import { useState } from 'react';
import { BsPersonFillLock,BsKeyFill,BsEnvelopeArrowUpFill } from 'react-icons/bs'
import img1 from "../assets/bgimg.jpg"
import {Link} from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <>
      <div className='flex w-full h-screen bg-white text-center'>

        <div className='w-10/12 h-full lg:flex m-auto'>

          <div className='lg:w-2/3 p-4'>
            <img src={img1} className='w-full h-full object-cover p-8' alt="" />
          </div>

          <div className='lg:w-1/3  p-4 flex justify-center items-center'>
            <form className='flex-col w-full'>

              <p className='text-2xl font-bold text-[#269CFF]'>Log In</p>
              <InputField name={"Enter your Username"} placeholder={"UserName"} value={username} onChange={()=>e.target.value} type="text" icon={<BsPersonFillLock />} />
              <InputField name={"Enter your Email"} placeholder={"Email"} value={email} onChange type="text" icon={<BsEnvelopeArrowUpFill />} />
              <InputField name={"Enter Password"} placeholder={"Password"} value={password} onChange type="text" icon={<BsKeyFill />} />

              <select id="" className='bg-[#269CFF] my-4 w-full outline-none text-white py-2 px-4 rounded'>
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>

              <Link to="/dash">
              <button type='submit' className='bg-[#269CFF] my-4 font-semibold w-full outline-none text-white py-2 px-4 rounded-full'
              >Log In
              </button>
              </Link>

            </form>
          </div>
        </div>
      </div>
    </>
  )



}

const InputField = ({ name, placeholder, value, onChange, type = "text", icon }) => {
  return (
    <div className='text-start py-2'>

      <p className='py-2'>{name}</p>
      <div className="px-3 py-2 bg-white rounded w-full flex items-center gap-3 border-[0.1px] border-[#0000f]">
        {icon && <span className="text-lg opacity-40 ">{icon}</span>}
        <input
          type={type} placeholder={placeholder}
          className="outline-none w-full opacity-95"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default Login;