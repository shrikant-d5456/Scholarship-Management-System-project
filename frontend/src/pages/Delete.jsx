import React from 'react';
import { BsXOctagonFill } from 'react-icons/bs';
import Modal from 'react-modal';

const Delete = ({ id, closeModal }) => {
  return (
    <Modal
      isOpen={true} // The modal is always open when this component is rendered
      onRequestClose={closeModal}
      className="modalcss lg:text-base text-sm"
    >
      <div className='flex gap-2 items-center justify-start'>
        <BsXOctagonFill className='md:text-2xl text-lg text-red-500'/> 
        <p className='text-xl font-semibold my-2'> Delete Students Information</p>
      </div>

      <p className='text-sm'>Are you sure you want to send the item to the site Recycle Bin?</p>

      <div className='flex justify-end my-4 gap-4'>
        <button className='px-4 py-1 border-[1px] text-white bg-red-500 shadow-md'>
          Delete
        </button>
        <button onClick={closeModal} className='bg-[#269CFF] text-white px-4 py-1 shadow-md'>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default Delete;
