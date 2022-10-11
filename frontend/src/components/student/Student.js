import React from 'react'
import StudentAssignment from './student-assignment/StudentAssignment'
import StudentAnnouncment from './student-announcment/StudentAnnouncment'
import StudentCourse from './student-course/StudentCourse'
import LoginPage from '../login/LoginPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Student = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/s-assignment" element={<StudentAssignment/>} />
          <Route path="/s-announcment" element={<StudentAnnouncment/>} />
          <Route path="/s-courses" element={<StudentCourse/>} />
          <Route path="/s-logout" element={<LoginPage/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default Student