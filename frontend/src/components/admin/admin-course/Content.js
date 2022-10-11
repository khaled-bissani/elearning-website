import React from 'react'
import ContentTitle from '../utilities/ContentTitle'
import TextField from '../utilities/TextField'
import Button from '../utilities/Button'
import TableHeader from '../utilities/TableHeader'
import TableBody from '../utilities/TableBody';

const Content = () => {
  return (
    <div className='content'>
        <ContentTitle title={"Course"}/>
        <div className='content-buttons'>
            <TextField placeholder={"Course code"}/>
            <Button text={"Add"}/>
            <Button text={"Edit"}/>
            <Button text={"Delete"}/>
            <Button text={"Assign"}/>
        </div>
        <div className='table'>
            <TableHeader text1={"Course Id"} text2={"Course Code"} text3={"Course Name"} text4={"Assigned To"} />
            <TableBody />
        </div>
    </div>
  )
}

export default Content