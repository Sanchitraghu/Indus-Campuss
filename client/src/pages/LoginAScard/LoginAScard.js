import React, { useState } from "react";
import Navbar from "../../Components/Navbar_login/Navbar";
import About from "../companyAuth/About";
import UserTypeSelector from "./UserTypeSelector";

const LoginAScard = ()=> {
    return (
        <div className="">
            
            <About/>
            <UserTypeSelector/>
        </div>
    )
}
export default LoginAScard;