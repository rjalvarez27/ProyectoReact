import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../src/Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Dashboard from '../src/Pages/Dashboard.jsx'
import Admin from './Pages/Admin.jsx'
import { PrivateRoute } from './Routes/PrivateRoutes.jsx'
import '../src/styles/index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
         <Route path='/dashboard' element={<Dashboard />} />
         <Route path='/admin' element={<Admin />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
