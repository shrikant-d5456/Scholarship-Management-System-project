import { useContext, useState } from 'react';
import { BsPersonFillLock, BsKeyFill, BsEnvelopeArrowUpFill } from 'react-icons/bs';
import img1 from "../assets/bgimg.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Util/UserContext';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(loading);

    try {
      localStorage.setItem("selectedOption", selectedOption);
      setTimeout(() => {
        let userType = localStorage.getItem("selectedOption", selectedOption);
        userType === "teacher" ? navigate("/teacher-dash") : navigate("/headquarter-dash");
        setLoading(false);
      }, 4000);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <>
      {loading && (
        <div className=" transition-all fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex w-[200px] flex-col gap-2 justify-center items-center bg-white p-6 rounded">
            <span className="loader"></span>
            <p>Loading..</p>
          </div>
        </div>
      )}

      <div className="flex w-full h-screen bg-white text-center">
        <div className="w-10/12 h-full lg:flex m-auto">
          <div className="lg:w-2/3 p-4">
            <img src={img1} className="w-full h-full object-cover p-8" alt="" />
          </div>

          <div className="lg:w-1/3 p-4 flex justify-center items-center">
            <form className="flex-col w-full" onSubmit={loginHandler}>
              <p className="text-2xl font-bold text-[#269CFF]">Log In</p>
              <InputField
                name={"Enter your Username"}
                placeholder={"UserName"}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                icon={<BsPersonFillLock />}
              />
              <InputField
                name={"Enter your Email"}
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                icon={<BsEnvelopeArrowUpFill />}
              />
              <InputField
                name={"Enter Password"}
                placeholder={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                icon={<BsKeyFill />}
              />

              <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="btn my-4 w-full outline-none text-white py-2 px-4 rounded"
              >
                <option value="option1">Select an option</option>
                <option value="teacher">Teacher or Principal</option>
                <option value="headquarter">Headquarter</option>
              </select>

              <button
                type="submit"
                className="btn my-4 font-semibold w-full outline-none text-white py-2 px-4 rounded-full"
              >
                Log In
              </button>

              <p>
                Don't have an account? <Link to="/signup" className="text-blue-500 underline">SignUp</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


const InputField = ({ name, placeholder, value, onChange, type = "text", icon }) => {
  return (
    <div className="text-start py-2">
      <p className="py-2">{name}</p>
      <div className="px-3 py-2 bg-white rounded w-full flex items-center gap-3 border-[0.1px] border-[#0000f]">
        {icon && <span className="text-lg opacity-40 ">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          className="outline-none w-full opacity-95"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Login;
