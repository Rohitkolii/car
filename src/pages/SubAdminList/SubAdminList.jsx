import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import Styles from '../SubAdminList/SubAdminList.module.css'

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
                    <h3>Sub Admin</h3>
                    <label htmlFor="">Search:</label> <br />
                    <input placeholder='Search' type="text" name="" id="" />
                </div>
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Roles</th>
                            {/* <th>Actions</th> */}
                        </tr>
                        {
                            data && data.map((sa,i)=>{
                                return(
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{sa.id}</td>
                                        <td>{sa.name}</td>
                                        <td>{sa.email}</td>
                                        <td>{sa.mobile}</td>
                                        <td>{sa.roles}</td>
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