import React from 'react'
import ContentTitle from '../utilities/ContentTitle'
import TextField from '../utilities/TextField'
import Button from '../utilities/Button'
import TableHeader from '../utilities/TableHeader'
import TableBody from '../utilities/TableBody';

const Content = () => {
  return (
    <div className='content'>
        <ContentTitle title={"Courses"}/>
        <div className='table'>
            <TableHeader text1={"Course Code"} text2={"Course Name"} text3={"Assigned To"} text4={"Date"} />
            <TableBody />
        </div>
    </div>
  )
}

export default Content