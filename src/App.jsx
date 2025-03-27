import { useState } from 'react'
import { Route, Routes } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import UsersListPage from './pages/UsersListPage/UsersListPage'
import SubAdminList from './pages/SubAdminList/SubAdminList'
import CabManagerList from './pages/CabManagerList/CabManagerList'
import DriverMap from './pages/DriverMap/DriverMap'
import Bookings from './pages/Bookings/Bookings'
import Partners from './pages/Partners/Partners'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        {/* //Login Page  */}
        <Route path='/' element={<DashboardPage />} />
        <Route path='/driver' element={<UsersListPage />} />
        <Route path='/driver/:id' element={<DriverMap />} />
        <Route path='/subadmin' element={<SubAdminList />} />
        <Route path='/cabmanager' element={<CabManagerList />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/partners' element={<Partners />} />

        {/* //Error Page is here */}
        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Routes>
  )
}

export default App
