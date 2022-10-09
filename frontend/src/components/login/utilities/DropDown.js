import React from 'react'

const DropDown = () => {
  return (
    <div className='user-type'>
        <select id="user_type">
            <option> User Type </option>
            <option value="1"> Admin </option>
            <option value="2"> Instructor </option>
            <option value="3"> Student</option>
        </select>
    </div>
  )
}

export default DropDown