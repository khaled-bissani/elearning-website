import React from 'react'
import { Link } from "react-router-dom";
import WebsiteTitle from '../instructor/utilities/WebsiteTitle'
import Option from '../instructor/utilities/Option';

const SideBar = () => {
  return (
    <div className='side-bar'>
        <WebsiteTitle />
        <div className='options'>
            <Link className='link' to={"/i-student"}><Option text={"Student"}/></Link>
            <Link className='link' to={"/i-assignment"}><Option text={"Assignment"}/></Link>
            <Link className='link' to={"/i-announcment"}><Option text={"Announcment"}/></Link>
            <Link className='link' to={"/i-logout"}><Option text={"Logout"}/></Link>
        </div>
    </div>
  )
}

export default SideBar