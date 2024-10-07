// import Select from './BoilarPlate/Select';
// import React, { useState } from 'react';

// const App = () => {
//     const options = ["tea", "coffee", "hot coffee", "cold coffee", "lemon tea"];

//     const [inp, setInp] = useState("");
//     console.log(inp)

//     return (
//         <Select
//             options={options}
//             placeholder="Search Option"
//             inp={inp}
//             setInp={setInp}
//         />
//     )
// }
// export default App;



import React, { useState } from 'react';

const Select = ({ options, placeholder, inp, setInp }) => {

    const [showoptions, setShowoptions] = useState(false);

    return (
        <div className='w-full cursor-pointer' onClick={() => setShowoptions(!showoptions)}>
            <input
                type="text"
                placeholder={placeholder}
                className=' w-full p-2 border rounded mb-2 md:mb-0 md:mr-2 outline-none'
                value={inp}
                onChange={(e) => setInp(e.target.value)}
                title='click here'
            />
            {
                showoptions &&
                <div className='flex'>
                    <div className=' absolute shadow-md rounded-sm w-[400px] h-[130px] overflow-scroll scroll-smooth bg-white'>
                    {options.filter(ele => ele.includes(inp)).map((ele, index) => (
                        <Option key={index} ele={ele} setInp={setInp} setShowoptions={setShowoptions} />
                    ))}
                </div>
                <button className=' absolute mt-[130px] bg-slate-400 text-white px-4 py-2'>Close</button>
                    </div>
            }
        </div>
    );
};

const Option = ({ ele, setInp, setShowoptions }) => {

    const operation = (e) => {
        e.stopPropagation();
        setShowoptions(false);
        setInp(ele);
    }
    return (
        <div className='w-full border-b-[1px] bg-white cursor-pointer '
            onClick={operation}>
            <p className=' w-full text-left bg-white p-2  hover:bg-blue-100 overflow-x-scroll px-2'> {ele}</p>
        </div>
    );
    // ‣✓⩥▶◄►▷▸•
};
export default Select;