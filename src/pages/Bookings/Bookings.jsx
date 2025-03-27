import data from './data.json'
import Styles from './Bookings.module.css'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import AdminNavabar from '../../components/AdminNavbar/AdminNavabar'
import { useState } from 'react'
import { RiCloseLargeFill } from 'react-icons/ri'
const Bookings = () => {

    const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

    const[showemp, setshowemp] = useState(false)
        const[empdata, setempdata] = useState([])
    
        const viewCard =(u)=>{
            setshowemp(true)
            setempdata(u.employee_details)
        }
    
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
                    <h1>Bookings</h1>
                    <label htmlFor="">Search:</label> <br />
                    <input onChange={(e)=> setSearchQuery(e.target.value)} placeholder='Search' type="text" name="" id="" />
                </div>
            <table>
                    <tr>
                        <th>S.No</th>
                        <th>b.Id</th>
                        <th>user</th>
                        <th>cab manager</th>
                        <th>Employee count</th>
                        <th>total_distance</th>
                        <th>pickup_location</th>
                        <th>dropoff_location</th>
                        <th>pickup & dropoff time</th>
                        <th>date</th>
                        <th>Status</th>
                        <th>View</th>
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
                                    <td>{data.employee_count}</td>
                                    <td>{data.total_distance}</td>
                                    <td>{data.pickup_location}</td>
                                    <td>{data.dropoff_location}</td>
                                    <td>{data.pickup_time} <br />to <br /> {data.dropoff_time}</td>
                                    <td>{data.date}</td>
                                    <td style={{color: colorr}}>{data.status}</td>
                                    <td style={{cursor:'pointer'}} onClick={()=>viewCard(data)} >Details</td>
                                </tr>
                            )
                        })
                        
                        :  <h1 style={{margin: "20px auto", textAlign: 'center', textTransform: 'uppercase', color:'#0061ff'}}>No data Found!</h1>
                    }
                    
                </table>

                {
                        showemp ?
                        <div className={Styles.emp}>
                            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                            <h3>Employee Details</h3>
                            <RiCloseLargeFill style={{cursor:'pointer'}} onClick={()=> setshowemp(false)}/>
                            </div>
                            <table>
                            {

                                empdata?.map((e) => {
                                    return(
                                        <tr>
                                            <td>{e.employee_id}</td>
                                            <td>{e.name}</td>
                                            <td>{e.phone}</td>
                                            <td>{e.email}</td>
                                            <td>{e.pickup_location}</td>
                                            <td>{e.drop_location}</td>
                                            <td>{e.pickup_time}</td>
                                            <td>{e.drop_time}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                        </div>
                        :""
                    }

                    {
                        showemp ? <div className={Styles.bg}></div> : ""
                    }

            </div>
        </section>
      </section>
        </>
    )
}

export default Bookings