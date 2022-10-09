import React from 'react'
import { FaChalkboardTeacher} from "react-icons/fa";

const Option = ({text}) => {
  return (
    <div>
        <div className='option'>
            <FaChalkboardTeacher style={{color: "white", fontSize:"25px"}}/>
            <p className='option-text'>{text}</p>
        </div>
    </div>
  )
}

Option.defaultProps = {
    text: "default",
  };

export default Option