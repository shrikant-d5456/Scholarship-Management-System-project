import React from 'react'
import Modal from 'react-modal';

const Student_info = ({ id, closeModal }) => {
    return (
        <Modal
            isOpen={true} // The modal is always open when this component is rendered
            onRequestClose={closeModal}
            className="modalcss"
        >
            <div className='flex gap-2 items-center justify-start'>
                <p className='text-xl font-semibold my-2'> Student Details </p>
            </div>

           
            <div className='flex justify-end my-4 gap-4'>
                <button className='px-4 py-1 border-[1px] text-white bg-green-500 shadow-md'>
                    Save
                </button>
                <button onClick={closeModal} className='bg-[#269CFF] text-white px-4 py-1 shadow-md'>
                    Close
                </button>
            </div>
        </Modal>
    );
};

export default Student_info
