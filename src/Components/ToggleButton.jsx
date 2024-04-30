import React, { useState } from 'react'

function ToggleButton() {
    const [isChecked, setIsChecked] = useState(true);

    const handleToggle = () => {
      setIsChecked(!isChecked);
    };
  return (
    <div className="flex gap-3 items-center">

    <label className="switcher flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="switcher_input hidden"
        checked={isChecked}
        onChange={handleToggle}
        name="status"
      />
      <span className={`switcher_control w-10 h-5 bg-[#14B09D] rounded-full shadow-inner flex items-center ${
         isChecked?"bg-[#14B09D] ":"bg-[#E7EAF3]"
      }`}>
        <span
          className={`switcher_indicator w-4 h-4 rounded-full shadow-md transform transition duration-300 ease-in-out ${
            isChecked
              ? "bg-white translate-x-5"
              : "bg-white translate-x-0"
          }`}
          aria-hidden="true"
        ></span>
      </span>
    </label>
  </div>
  )
}

export default ToggleButton
