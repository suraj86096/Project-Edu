import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Welcome from './Welcome'
import Login from './Login'
import Singnup from './SingnUp'
import Account from './Account'
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singnup" element={<Singnup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  )
}

export default App

