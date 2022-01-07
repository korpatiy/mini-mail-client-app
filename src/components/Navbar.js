import React from 'react'
import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <NavLink className="navbar-brand mx-auto" to="/messages">📨 Мини-почта 📨</NavLink>
        </div>
    </nav>
)
