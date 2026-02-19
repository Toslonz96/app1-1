import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./home";
import Product from "./product";
import Member from "./member"; 
import './navlink.css';

export default function Router3() {
    return (
        <BrowserRouter>
            <nav className="nav">
                <NavLink to='/' className={({ isActive }) => isActive ? "active_menu" : "menu"} style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : ""
                    };
                }}>Home </NavLink> -&nbsp;
                <NavLink to='/products' className={({ isActive }) => isActive ? "active_menu" : "menu"}>Products</NavLink> -&nbsp;
                <NavLink to='/member' className={({ isActive }) => isActive ? "active_menu" : "menu"}>Member</NavLink> -&nbsp;
                <NavLink to='/contact' className={({ isActive }) => isActive ? "active_menu" : "menu"}>Contact Us</NavLink>
            </nav>
            <Routes style={{margin:'20px'}}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
                <Route path="/member" Component={Member} />
                <Route path="/contact" element={<div style={{textAlign:"center"}}>Contact Us Page</div>} />
                <Route path="/*" element={<div style={{textAlign:'center'}}>Error 404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}
