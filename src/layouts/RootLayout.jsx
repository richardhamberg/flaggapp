import React from "react"
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router-dom'

const RootLayout=()=>{
    return(
    <div className="root-layout">
        <header>
            <Navbar/>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
        )
}
export default RootLayout;