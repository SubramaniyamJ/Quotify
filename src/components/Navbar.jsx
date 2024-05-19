import React from "react";
import logo from './images/logo.jpg'
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const co = ({isActive}) => {
        return{
            backgroundColor: isActive ? '#4d4d4d' : null
        };
    };
    return( 
        <div className="navbar">
            <NavLink to = "/" style={{display:"flex", textDecoration:'none', color:'white'}}>
                <img src = {logo}/>            
                <div>Quotify</div>
            </NavLink>
            <div className="wrapper">
                <NavLink to = '/about' className = 'aboutButton' style={co}>about</NavLink>
                <NavLink to = '/contact' className="contactButton">contact</NavLink>
            </div>   
        </div>
    ); 
}

export default Navbar;