import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import Styles from '../UsersListPage/UsersListPage.module.css'

import { ImBin } from "react-icons/im";
import { FaUserEdit } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

import { Link } from 'react-router-dom';
import data from './data.json'


const UsersListPage = () => {
    
    const[sidebarVisiblity, setSidebarVisiblity] = useState(false)
    

  return (
    <>

        <div style={{display: 'flex'}}>
            <AdminSidebar
            setSidebarVisiblity={setSidebarVisiblity}
            sidebarVisiblity={sidebarVisiblity} />

            <section style={{width: "100%"}}>
                <AdminNavabar
                setSidebarVisiblity={setSidebarVisiblity}
                sidebarVisiblity={sidebarVisiblity} />
                <div className={Styles.bookingtable}>
                {/* <div style={{width: "95%", margin: "10px auto"}}>
                    <label htmlFor="">Search:</label> <br />
                    <input placeholder='Search' type="text" name="" id="" />
                </div> */}
                <div style={{width: "95%", margin: "20px auto"}}>
                    <h3>Drivers</h3>
                    <label htmlFor="">Search:</label> <br />
                    <input placeholder='Search' type="text" name="" id="" />
                    <button style={{float:"right"}}>Add driver</button>
                </div>
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>id</th>
                            <th>Name</th>
                            <th>Cab No.</th>
                            <th>Driving Licence No.</th>
                            <th>Actions</th>
                            <th>View</th>
                        </tr>

                        {
                            data && data.map((u,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{u.id}</td>
                                        <td>{u.name}</td>
                                        <td>{u.cabno}</td>
                                        <td>{u.dlno}</td>
                                        <td style={{display:'flex', gap:20, justifyContent:'center'}}>
                                        <FaUserEdit style={{color: "#0061ff", fontSize: 20}}/>
                                        <ImBin style={{color: "red", fontSize: 20}}/>
                                        
                                        <Link to={`${u.id}`}><FaMapLocationDot style={{color: "gold", fontSize: 20}}/></Link>
                                        </td>
                                        <td style={{cursor:'pointer'}} onClick={()=>viewCard(u)}>Details</td>
                                    </tr>
                                )
                            })
                        }            
                    </table>

                    
                </div>
            </section>
        </div>
    </>
  )
}

export default UsersListPage