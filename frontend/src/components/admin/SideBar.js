import React from 'react'
import { Link } from "react-router-dom";
import WebsiteTitle from '../admin/utilities/WebsiteTitle'
import Option from '../admin/utilities/Option';



const SideBar = () => {
  return (
    <div className='side-bar'>
        <WebsiteTitle />
        <div className='options'>
            <Link className='link' to={"/a-instructor"}><Option text={"Instructor"}/></Link>
            <Link className='link' to={"/a-student"}><Option text={"Student"}/></Link>
            <Link className='link' to={"/a-courses"}><Option text={"Courses"}/></Link>
            <Link className='link' to={"/a-logout"}><Option text={"Logout"}/></Link>  
        </div>
    </div>
  )
}

export default SideBar