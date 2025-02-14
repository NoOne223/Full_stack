import { useState } from "react";
import './form.css'

const CustomRadio = () => {
  const [selectedRadio, setSelectedRadio] = useState("1");

  return (
    <div className="flex gap-x-5 items-center">
      <label className="custom-radio">
        1
        <input 
          type="radio" 
          name="radio" 
          value="1"
          checked={selectedRadio === "1"}
          onChange={(e) => setSelectedRadio(e.target.value)}
        />
        <span className="checkmark"></span>
      </label>

      <label className="custom-radio">
        2
        <input 
          type="radio" 
          name="radio" 
          value="2"
          checked={selectedRadio === "2"}
          onChange={(e) => setSelectedRadio(e.target.value)}
        />
        <span className="checkmark"></span>
      </label>

      <div className="flex items-center gap-x-2">
        <label className="custom-radio">
          Nhiều hơn
          <input 
            type="radio" 
            name="radio"  
            value="more"
            checked={selectedRadio === "more"}
            onChange={(e) => setSelectedRadio(e.target.value)}
          />
          <span className="checkmark"></span>
        </label>

        <input 
          className="max-w-24 max-h-8 p-2 bg-black border border-white rounded-sm focus:outline-none 
                     focus:shadow-custom focus:shadow-fuchsia-500 disabled:border-gray-500/50"
          disabled={selectedRadio !== "more"}  
        />
      </div>
    </div>
  );
};

export default CustomRadio;