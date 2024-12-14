import React from 'react';
import './App.css';
import './styles/tailwind.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Jobs from './Pages/Jobs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentAuthPage from './Pages/StudentAuthPage';
import StudentInfo from './Pages/StudentInfoPage';
import StudentSignup from './Pages/StudentSignupPage';
import StudentDashboard from './Pages/StudentDashboard';

const App = () => {
  const location = useLocation();

  // Pages where Navbar should not be displayed
  const hideNavbarRoutes = ['/student-dashboard'];

  return (
    <>
      {/* Conditionally render Navbar */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/student-auth" element={<StudentAuthPage />} />
        <Route path="/student-info" element={<StudentInfo />} />
        <Route path="/student-signup" element={<StudentSignup />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
      <Footer />
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
