import React from 'react'
import { Outlet } from 'react-router-dom'
import "./layout.scss"
import NavBar from '../../components/navbar/NavBar'

function Layout() {
    return (
        <div className='layout'>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout