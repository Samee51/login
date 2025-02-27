import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './components/protectedRoute';
import Signup from './components/Signup';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => { setIsAuthenticated(true)};
  const logout = () => { setIsAuthenticated(false)};


  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login login={login} />} />
          <Route path='/signup' element={<Signup login={login} />} />
          
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path='*' element={<Home logout={logout} />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
