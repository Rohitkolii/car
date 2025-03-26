import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import { IoCarOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { VscBook } from "react-icons/vsc";
import { PiUserListLight } from "react-icons/pi";
import Styles from "./DashboardPage.module.css"


const DashboardPage = () => {
  
  const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

  return (
    <>

        <div style={{display: 'flex'}}>
            <AdminSidebar 
            setSidebarVisiblity={setSidebarVisiblity}
            sidebarVisiblity={sidebarVisiblity} />
            <div className={Styles.DashboardPage}>
              <AdminNavabar 
              setSidebarVisiblity={setSidebarVisiblity} 
              sidebarVisiblity={sidebarVisiblity}/>

              <section className={Styles.dashContent}>
                <h1>Dashboard</h1>
                <p className='sublight' style={{fontSize : 15}}>plan, pripritize, and accoplish your tasks with ease.</p>
                <div className={Styles.dashTop}>
                  <div>
                    <p><IoCarOutline /></p>
                    <p>Total Vehicles</p>
                    <p>{0}</p>
                  </div>
                  <div>
                    <p><HiOutlineUsers /></p>
                    <p>Total Customer</p>
                    <p>{0}</p>
                  </div>
                  <div>
                    <p><PiUserListLight /></p>
                    <p>Total Vendors</p>
                    <p>{0}</p>
                  </div>
                  <div>
                    <p><VscBook /></p>
                    <p>Total Bookings</p>
                    <p>{0}</p>
                  </div>
                </div>
              </section>
            </div>
        </div>
    </>
  )
}

export default DashboardPage