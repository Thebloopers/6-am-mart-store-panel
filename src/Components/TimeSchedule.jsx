import React, { useState } from 'react';

const TimeSchedule = () => {

  const [isModalOpen, setisModalOpen] = useState(false)
  console.log(isModalOpen)

  const openModal = () => {

  }

  return (
    <div className='h-full w-full'>
      <div className={`relative w-2/5 h-2/5 bg-red-50 ${isModalOpen == true ? 'block' : 'hidden'}`}>
        <div className='flex flex-col absolute'>
          <h1>Create Schedule</h1>
          <form action="">
            <label htmlFor="">Start time:</label>
            <input type="time" />
            <label htmlFor="">End time:</label>
            <input type="time" />
          </form>
        </div>
      </div>
      <div>
        <h1 onClick={() => setisModalOpen(!isModalOpen)} className='cursor-pointer'>Add Schedule</h1>
      </div>
    </div>
  );
};

export default TimeSchedule;
