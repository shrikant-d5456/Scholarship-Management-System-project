import React from 'react'
import { BsBell, BsXOctagonFill } from 'react-icons/bs'

const Notify = () => {
    return (
        <div className='bg-white w-full'>

<h2 className="lg:text-2xl text-lg font-bold py-2 mb-6 active flex justify-start items-center gap-2">
<BsBell /> Notifications</h2>

            <div className='flex justify-start items-center gap-4 px-4 py-1 border-b-2 mb-2 border-yellow-600 bg-yellow-100 '>
                <div className='w-1/8'>
                    <span className='flex w-8 h-8 rounded-full' title='Edit Profile'>
                        <BsXOctagonFill className='w-full h-full object-cover rounded-full bg-red-500 text-white p-2' />
                    </span>
                </div>
                <div>
                    <p className=' bg-green-500 w-fit py-1 px-4 my-2 rounded-2xl text-white font-semibold'>Headquarter</p>
                    <p className='font-bold m-1'>About:</p>
                    <p className='text-gray-500 m-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, odit!</p>
                    <p className='font-semibold m-1'>email</p>
                </div>
            </div>

        </div>
    )
}

export default Notify
