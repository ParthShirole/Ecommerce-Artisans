import "../../styles/loginb.css";
import {Link} from "react-router-dom";
import React from "react";


const Registerb = () => {
    return (
        <>
        <h1 className="heading">Register for Buyer</h1>
        <div className="main-login">
            <p className="sign" align="center">Sign Up</p>
            <form className="form1">
                <input className="un " type="text" align="center" placeholder="Username"/>
                <input className="un " type="text" align="center" placeholder="Email"/>
                <input className="pass" type="password" align="center" placeholder="Password"/>
                <input className="pass" type="password" align="center" placeholder="Confirm Password"/>

                <Link to={`/login/buyer`}><button className="submit" align="center">Sign in</button></Link>
            </form>
        </div>
        
        </>
        
    )
}

export default Registerb;

