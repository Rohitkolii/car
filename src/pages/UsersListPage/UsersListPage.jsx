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
                        <tr>
                            <td>1</td>
                            <td>1111</td>
                            <td>Aman</td>
                            <td style={{display:'flex', gap:20, justifyContent:'center'}}>
                            <FaUserEdit style={{color: "#0061ff", fontSize: 20}}/>
                            <ImBin style={{color: "red", fontSize: 20}}/>
                            <FaMapLocationDot style={{color: "gold", fontSize: 20}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2222</td>
                            <td>Rajiv</td>
                            <td style={{display:'flex', gap:20, justifyContent:'center'}}>
                            <FaUserEdit style={{color: "#0061ff", fontSize: 20}}/>
                            <ImBin style={{color: "red", fontSize: 20}}/>
                            <FaMapLocationDot style={{color: "gold", fontSize: 20}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>3333</td>
                            <td>Kishan</td>
                            <td style={{display:'flex', gap:20, justifyContent:'center'}}>
                            <FaUserEdit style={{color: "#0061ff", fontSize: 20}}/>
                            <ImBin style={{color: "red", fontSize: 20}}/>
                            <FaMapLocationDot style={{color: "gold", fontSize: 20}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>4444</td>
                            <td>yogesh</td>
                            <td style={{display:'flex', gap:20, justifyContent:'center'}}>
                            <FaUserEdit style={{color: "#0061ff", fontSize: 20}}/>
                            <ImBin style={{color: "red", fontSize: 20}}/>
                            <FaMapLocationDot style={{color: "gold", fontSize: 20}}/>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>5555</td>
                            <td>Sachin</td>
                            <td style={{display:'flex', gap:20, justifyContent:'center'}}>
                            <FaUserEdit style={{color: "#0061ff", fontSize: 20}}/>
                            <ImBin style={{color: "red", fontSize: 20}}/>
                            <FaMapLocationDot style={{color: "gold", fontSize: 20}}/>
                            </td>
                        </tr>
                        
                    </table>
                </div>
            </section>
        </div>
    </>
  )
}

export default UsersListPage