import React from 'react'
import AdminInstructor from './admin-instructor/AdminInstructor';
import AdminStudent from './admin-student/AdminStudent';
import AdminCourse from './admin-course/AdminCourse';
import LoginPage from '../login/LoginPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Admin = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/a-instructor" element={<AdminInstructor/>} />
          <Route path="/a-student" element={<AdminStudent/>} />
          <Route path="/a-courses" element={<AdminCourse/>} />
          <Route path="/a-logout" element={<LoginPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Admin