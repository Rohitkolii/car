import { useParams } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar/AdminSidebar";
import AdminNavabar from "../../components/AdminNavbar/AdminNavabar";
import Styles from '../DashboardPage/DashboardPage.module.css'
import { useState } from "react";
import { IoCarOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiUserListLight } from "react-icons/pi";
import { VscBook } from "react-icons/vsc";
import data from '../UsersListPage/data.json'

const DriverMap = () =>{
    const { id } = useParams()
      const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

      const singledata = data?.filter((u)=> u.id == id)
      console.log(singledata);
      

    return(
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
                <h1>Driver location</h1>
                <p className='sublight' style={{fontSize : 15}}>plan, pripritize, and accoplish your tasks with ease.</p>
                
                <div style={{width:"100%", marginTop: 10}}>
                <iframe 
                    width="100%" 
                    height="400" 
                    // frameborder="0" 
                    // scrolling="no" 
                    src={`https://maps.google.com/maps?q=${singledata[0].latitude},${singledata[0].longitude}&hl=es&z=14&output=embed`}>
                    </iframe>
                </div>
              </section>
            </div>
        </div>
        </>
    )
}

export default DriverMap;