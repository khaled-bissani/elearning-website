import React from 'react'
import InstructorStudent from './instructor-student/InstructorStudent'
import InstructorAssignment from './instructor-assignment/InstructorAssignment'
import InstructorAnnouncment from './instructor-announcment/InstructorAnnouncment'
import LoginPage from '../login/LoginPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Instructor = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/i-student" element={<InstructorStudent/>} />
          <Route path="/i-assignment" element={<InstructorAssignment/>} />
          <Route path="/i-announcment" element={<InstructorAnnouncment/>} />
          <Route path="/i-logout" element={<LoginPage/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default Instructor