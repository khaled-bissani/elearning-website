import React from 'react'
import { Link } from "react-router-dom";
import WebsiteTitle from '../student/utilities/WebsiteTitle'
import Option from '../student/utilities/Option';

const SideBar = () => {
  return (
    <div className='side-bar'>
        <WebsiteTitle />
        <div className='options'>
            <Link className='link' to={"/s-assignment"}><Option text={"Assignment"}/></Link>
            <Link className='link' to={"/s-announcment"}><Option text={"Announcment"}/></Link>
            <Link className='link' to={"/s-courses"}><Option text={"Courses"}/></Link>
            <Link className='link' to={"/s-logout"}><Option text={"Logout"}/></Link>
        </div>
    </div>
  )
}

export default SideBar