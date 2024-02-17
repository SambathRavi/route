// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import AllCourses from './components/AllCourses';
import FullStackCourses from './components/FullStackCourses';
import DataScienceCourses from './components/DataScienceCourses';
import CyberSecurityCourses from './components/CyberSecurityCourses';
import CareerCourses from './components/CareerCourses';

function App() {



  return (<>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="/full-stack" element={<FullStackCourses />} />
        <Route path="/data-science" element={<DataScienceCourses />} />
        <Route path="/cyber-security" element={<CyberSecurityCourses />} />
        <Route path="/career" element={<CareerCourses />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
