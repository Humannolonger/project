import LoginPage from './user/Login'
import RegistrationPage from './user/Signup'
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Frontpage from './user/frontpage'
import Home from './home'
import About from './about'
import Contact from './contact'
export default function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<Home />} />="/"
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
       
      </Routes>
    </Router>
    </>
  );
}
