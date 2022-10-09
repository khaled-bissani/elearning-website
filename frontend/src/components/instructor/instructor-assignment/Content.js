import React from 'react'
import ContentTitle from '../utilities/ContentTitle'
import TextField from '../utilities/TextField'
import Button from '../utilities/Button'
import TableHeader from '../utilities/TableHeader'
import TableBody from '../utilities/TableBody';

const Content = () => {
  return (
    <div className='content'>
        <ContentTitle title={"Assignment"}/>
        <div className='content-buttons'>
            <TextField placeholder={"Assignment"}/>
            <Button text={"Add"}/>
            <Button text={"Edit"}/>
            <Button text={"Delete"}/>
            <Button text={"Send"}/>
        </div>
        <div className='table'>
            <TableHeader text1={"Assignment Id"} text2={"Assignment Title"} text3={"Assignment Content"} text4={"Deadline"} />
            <TableBody />
        </div>
    </div>
  )
}

export default Content