import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import Styles from '../CabManagerList/CabManagerList.module.css'

import { ImBin } from "react-icons/im";
import { FaUserEdit } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

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
                <div style={{width: "95%", margin: "10px auto"}}>
                    <h3>Cab Manager</h3>
                    <label htmlFor="">Search:</label> <br />
                    <input placeholder='Search' type="text" name="" id="" />
                </div>
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>id</th>
                            <th>Name</th>
                            <th>Moble</th>
                            <th>Email</th>
                            <th>vendor</th>
                            <th>Assigned Cab</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        {
                            data && data.map((cm,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{cm.id}</td>
                                        <td>{cm.name}</td>
                                        <td>{cm.mobile}</td>
                                        <td>{cm.email}</td>
                                        <td>{cm.vendor}</td>
                                        <td>{cm.assigned_cab_count}</td>
                                        <td>{cm.status}</td>
                                        <td>
                                            <span style={{color:'green', backgroundColor:'whitesmoke', padding:'3px 15px', borderRadius:12}}>
                                                Appoint
                                            </span>
                                        </td>
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