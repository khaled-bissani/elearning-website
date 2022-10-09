import React from 'react'
import ContentTitle from '../utilities/ContentTitle'
import TextField from '../utilities/TextField'
import Button from '../utilities/Button'
import TableHeader from '../utilities/TableHeader'
import TableBody from '../utilities/TableBody';

const Content = () => {
  return (
    <div className='content'>
        <ContentTitle title={"Announcment"}/>
        <div className='content-buttons'>
            <TextField placeholder={"Announcment"}/>
            <Button text={"Add"}/>
            <Button text={"Edit"}/>
            <Button text={"Delete"}/>
            <Button text={"Send"}/>
        </div>
        <div className='table'>
            <TableHeader text1={"Announcment Id"} text2={"Announcment Title"} text3={"Announcment Content"} text4={null} />
            <TableBody />
        </div>
    </div>
  )
}

export default Content