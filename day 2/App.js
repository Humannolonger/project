import LoginPage from './user/Login'
import RegistrationPage from './user/Signup'
import Dashboard from './user/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegistrationPage />}></Route>
      </Routes>
    </Router>
  )
}
