import LoginPage from './user/Login'
import RegistrationPage from './user/Signup'
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home'
export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<Home />} />
       
      </Routes>
    </Router>
    </>
  );
}
