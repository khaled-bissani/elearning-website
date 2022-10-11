import React from 'react'
import ContentTitle from '../utilities/ContentTitle'
import TextField from '../utilities/TextField'
import Button from '../utilities/Button'
import TableHeader from '../utilities/TableHeader'
import TableBody from '../utilities/TableBody';

const Content = () => {
  return (
    <div className='content'>
        <ContentTitle title={"Student"}/>
        <div className='content-buttons'>
            <TextField placeholder={"Student name"}/>
            <Button text={"Add"}/>
            <Button text={"Edit"}/>
            <Button text={"Delete"}/>
            <Button text={"Course"}/>
        </div>
        <div className='table'>
            <TableHeader text1={"Student Id"} text2={"Student Name"} text3={"Student Email"} text4={"Student Password"} />
            <TableBody />
        </div>
    </div>
  )
}

export default Content