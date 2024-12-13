import logo from './logo.svg';
import './App.css';
import './styles/tailwind.css';
// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import EmployerDashboard from './pages/EmployerDashboard';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/employer-dashboard" element={<EmployerDashboard />} />
    </Routes>
  </Router>
);

export default App;
