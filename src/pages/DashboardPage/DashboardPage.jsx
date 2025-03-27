import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import { IoCarOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { VscBook } from "react-icons/vsc";
import { PiUserListLight } from "react-icons/pi";
import Styles from "./DashboardPage.module.css"
import { Line } from 'react-chartjs-2';


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
                    <p><VscBook /></p>
                    <p>Bookings</p>
                    <p>{0}</p>
                  </div>
                  <div>
                    <p><HiOutlineUsers /></p>
                    <p>Total Drivers</p>
                    <p>{0}</p>
                  </div>
                  <div>
                    <p><PiUserListLight /></p>
                    <p>Sub Admin</p>
                    <p>{0}</p>
                  </div>
                  <div>
                    <p><IoCarOutline /></p>
                    <p>Cab managers</p>
                    <p>{0}</p>
                  </div>
                </div>

                <div>
                  {/* <Line 
                    data={{
                      labels: ["A", "B", "C"],
                      datasets: [
                        {
                          label: "Booking",
                          data: ["2","5","6"],
                          backgroundColor: "#0061ff",
                          borderColor: "#hdhd54"
                        },
                        {
                          label: "dd",
                          data: ["2","5","6"],
                          backgroundColor: "#0061ff",
                          borderColor: "#hdhd54"
                        },
                      ]
                    }}

                    options={{
                      elements: {
                        line:{
                          tension: 0.5
                        }
                      },
                      plugins:{
                        title:{
                          text:"Hello"
                        }
                      }
                    }}

                  /> */}
                </div>
              </section>
            </div>
        </div>
    </>
  )
}

export default DashboardPage