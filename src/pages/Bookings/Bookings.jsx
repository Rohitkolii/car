import data from './data.json'
import Styles from './Bookings.module.css'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import AdminNavabar from '../../components/AdminNavbar/AdminNavabar'
import { useState } from 'react'
const Bookings = () => {

    const[sidebarVisiblity, setSidebarVisiblity] = useState(false)
    
    return(
        <>
         <section className={Styles.adminbookings} style={{display:'flex'}}>
        <AdminSidebar
        setSidebarVisiblity={setSidebarVisiblity}
        sidebarVisiblity={sidebarVisiblity} />
        <section style={{width: "100%"}}>
            <AdminNavabar 
            setSidebarVisiblity={setSidebarVisiblity}
            sidebarVisiblity={sidebarVisiblity} />
            <div className={Styles.bookingtable}>
                <div style={{width: "95%", margin: "10px auto"}}>
                    <label htmlFor="">Search:</label> <br />
                    <input onChange={(e)=> setSearchQuery(e.target.value)} placeholder='Search' type="text" name="" id="" />
                </div>
            <table>
                    <tr>
                        <th>S.No</th>
                        <th>b.Id</th>
                        <th>user</th>
                        <th>cab manager</th>
                        <th>Status</th>
                    </tr>
                    {
                        data?.length ? data.map((data, i)=> {
                            let colorr;
                            if(data.status=="active"){
                                colorr = "green"
                            }else if(data.status=="on trip"){
                                colorr="gold"
                            }else{
                                colorr="red"
                            }
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{data.booking_id}</td>
                                    <td >{data.username}</td>
                                    <td>{data.cab_manager_name}</td>
                                    <td style={{color: colorr}}>{data.status}</td>
                                </tr>
                            )
                        })
                        
                        :  <h1 style={{margin: "20px auto", textAlign: 'center', textTransform: 'uppercase', color:'#0061ff'}}>No data Found!</h1>
                    }
                    
                </table>
            </div>
        </section>
      </section>
        </>
    )
}

export default Bookings