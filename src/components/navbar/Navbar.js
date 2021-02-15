import React,{Component} from "react"
import {render} from "react-dom"
import logo from "../../assets/logo.png";
import "./navbar.css"

const pjtTitle = "Vehicle Pollution Monitoring, Control and Challan System Using MQ2 Sensor Based on Internet of Things";
 const Navbar = () =>{
    return(
        <div className="nav">
            <img id="nav-logo" src={logo} alt="sastra" />
            <h1 className="nav-title">{pjtTitle}</h1>
        </div>
    )
}
export default Navbar;