import React from 'react';
import './App.css';
import './styles/tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Jobs from './Pages/Jobs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StudentAuthPage from './Pages/StudentAuthPage'; // Import the new StudentAuthPage
import StudentInfo from './Pages/StudentInfoPage';
import StudentSignup from './Pages/StudentSignupPage';


const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/student-auth" element={<StudentAuthPage />} /> {/* New route for Student Auth */}
      <Route path="/student-info" element={<StudentInfo />} /> {/* New route for Student Auth */}
      <Route path="/student-signup" element={<StudentSignup />} /> {/* New route for Student Auth */}
    </Routes>
    <Footer />
  </Router>
);

export default App;
