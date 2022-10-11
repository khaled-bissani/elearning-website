import React from 'react'
import ContentTitle from '../utilities/ContentTitle'
import TextField from '../utilities/TextField'
import Button from '../utilities/Button'
import TableHeader from '../utilities/TableHeader'
import TableBody from '../utilities/TableBody';

const Content = () => {
  return (
    <div className='content'>
        <ContentTitle title={"Instructor"}/>
        <div className='content-buttons'>
            <TextField placeholder={"Instructor name"}/>
            <Button text={"Add"}/>
            <Button text={"Edit"}/>
            <Button text={"Delete"}/>
            <Button text={"Send"}/>
        </div>
        <div className='table'>
            <TableHeader text1={"Instructor Id"} text2={"Instructor Name"} text3={"Instructor Email"} text4={"Instructor Password"} />
            <TableBody />
        </div>
    </div>
  )
}

export default Content