import React, { useEffect, useState } from 'react'
import Styles from './AdminNavbar.module.css'
import { NavLink } from 'react-router'
import { RiMenu2Fill } from 'react-icons/ri'

const AdminNavabar = ({setSidebarVisiblity, sidebarVisiblity}) => {

  const [profileStatus, setProfileStatus] = useState(false)

  return (
    <>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <RiMenu2Fill onClick={()=> setSidebarVisiblity(!sidebarVisiblity)}/>
            </div>
            
            <div onClick={()=> setProfileStatus(!profileStatus)} className={Styles.navlinks}>
                <div className={Styles.profilelink}>
                  <div>
                    <img src="/images/user2.jpg" alt="" />
                  </div>

                  <div>
                    <p>Admin</p>
                    <p>example@gmail.com</p>
                  </div>
                </div>
            </div>
        </nav>

        {
          profileStatus ? <div onClick={()=> setProfileStatus(!profileStatus)} className ={Styles.overlay}></div> : ''
        }

        {
          profileStatus ?
          <div className={Styles.profilemenu}>
                  <ul>
                      <li><NavLink to="/Profile">Profile</NavLink></li>
                      <li><NavLink onClick={logoutUser} to="">Logout</NavLink></li>
                      {/* <li><NavLink to="/">Logout</NavLink></li> */}
                  </ul>
              </div>
        : ''}
    </>
  )
}

export default AdminNavabar