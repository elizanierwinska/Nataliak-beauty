import React from "react"
import {Outlet}  from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout() {
    return (
        <div className="site-wrapper">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}