import React from 'react'

const TableHeader = ({text1, text2 ,text3, text4}) => {
  return (
    <div>
        <div className='table-header'>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <p>{text4}</p>
        </div>
    </div>
  )
}

export default TableHeader