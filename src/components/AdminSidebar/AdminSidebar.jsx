import React, { useEffect, useState } from 'react'
import Styles from './AdminSidebar.module.css'
import { Link } from 'react-router'
import { MdDashboard } from "react-icons/md";
import { PiSteeringWheelBold } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { HiOutlineDocumentPlus } from "react-icons/hi2";
import { MdManageHistory } from "react-icons/md";




const AdminSidebar = ({setSidebarVisiblity, sidebarVisiblity}) => {

  const[Showuser, setShowuser] = useState(false)

  return (
    <>
      <aside className={!sidebarVisiblity ? Styles.sidebar : Styles.Hidesidebar}>
        <div className={Styles.sidebarHead}>
          <div>
            {/* <img src="/images/wheel.png" alt="" /> */}
            <p><span style={{color: "#0061ff"}}>Admin</span>Panel<span style={{color: "#0061ff"}}>.</span></p>
          </div>
          <IoMdClose className={Styles.closeMenu} onClick={()=> setSidebarVisiblity(!sidebarVisiblity)} />
        </div>
          <ul>
            <li><Link to='/'><MdDashboard /> Dashboard</Link></li>
            <li onClick={()=> setShowuser(!Showuser)}><FaUsersCog /> User Management</li>
            {
              Showuser ?
              <ul className={Styles.subp}>
                <li><Link to='/driver'><FaUserSecret />Driver</Link></li>
                <li><Link to='/subadmin'><PiSteeringWheelBold />Sub Admin</Link></li>
                <li><Link to='/cabmanager'><FaBookReader />Cab Manager</Link></li>
              </ul>
              :""
            }
            <li><Link to='/bookings'><FaBookReader /> Bookings</Link></li>
            <li><Link to='/partners'><FaBookReader /> Partners</Link></li>
          </ul>
      </aside>
    </>
  )
}

export default AdminSidebar