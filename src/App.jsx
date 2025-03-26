import { useState } from 'react'
import { Route, Routes } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import UsersListPage from './pages/UsersListPage/UsersListPage'
import SubAdminList from './pages/SubAdminList/SubAdminList'
import CabManagerList from './pages/CabManagerList/CabManagerList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        {/* //Login Page  */}
        <Route path='/' element={<DashboardPage />} />
        <Route path='/driver' element={<UsersListPage />} />
        <Route path='/subadmin' element={<SubAdminList />} />
        <Route path='/cabmanager' element={<CabManagerList />} />

        {/* //Error Page is here */}
        {/* <Route path='*' element={<ErrorPage />} /> */}
      </Routes>
  )
}

export default App
