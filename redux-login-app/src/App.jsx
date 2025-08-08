import { useState } from 'react'
import Login from './Components/Login/Login'
import { useSelector } from 'react-redux'
import Dashboard from './Components/Dashboard/Dashborad'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import './App.css'

function App() {
  const { isAuthenticated } = useSelector(state => state.auth);

  return (
    <div className='app'>
      {isAuthenticated ? (
        <Dashboard />
      ) :
        (
          <Login />
        )}
    </div>
  );
};

export default App;
