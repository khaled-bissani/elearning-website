import React from 'react'
import { useState } from 'react';

const TextField = ({type,placeholder}) => {

  const [value, setValue] = useState('');

  const handleValue= event => {
    setValue(event.target.value);
  }
  console.log(value)

  return (
    <div>
        <input value={value} onChange={handleValue} className='text-field' type={type} placeholder={placeholder} />
    </div>
  )
}

export default TextField