import React, { useEffect, useState } from 'react'
import AdminNavabar from '../../components/AdminNavbar/AdminNavabar'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import Styles from '../UsersListPage/UsersListPage.module.css'

import { ImBin } from "react-icons/im";
import { FaUserEdit } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";


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
                    <label htmlFor="">Search:</label> <br />
                    <input placeholder='Search' type="text" name="" id="" />
                </div>
                    <table>
                        <tr>
                            <th>S.No</th>
                            <th>id</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                        {/* { */}
                            {/* // filteredVehicles?.length ? filteredVehicles.map((elm,i)=> { */}
                                {/* // return( */}
                                    <tr>
                                        <td>hello</td>
                                        <td>hello</td>
                                        <td>hello</td>
                                        <td style={{display:'flex', gap:20, justifyContent:'center'}}>
                                        <FaUserEdit style={{color: "#0061ff", fontSize: 20}}/>
                                        <ImBin style={{color: "red", fontSize: 20}}/>
                                        <FaMapLocationDot style={{color: "gold", fontSize: 20}}/>
                                        </td>
                                    </tr>
                                {/* // ) */}
                            {/* // }) */}

                            {/* // : <h1 style={{margin: "20px auto", textAlign: 'center', textTransform: 'uppercase', color:'#0061ff'}}>No Users Found!</h1> */}
                        {/* // } */}
                        
                    </table>
                </div>
            </section>
        </div>
    </>
  )
}

export default UsersListPage