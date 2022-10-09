import React from 'react'

const TextField = ({placeholder}) => {
  return (
    <div>
        <input className='text-field' type={"text"} placeholder={placeholder} />
    </div>
  )
}

export default TextField