import "../../styles/loginb.css";
import {Link} from "react-router-dom";
import React from "react";

const Loginb = () => {
    return (
        <>
        <h1 className="heading">Login for Buyer</h1>
        <div className="main-login">
            <p className="sign" align="center">Log in</p>
            <form className="form1">
                <input className="un " type="text" align="center" placeholder="Username"/>
                <input className="pass" type="password" align="center" placeholder="Password"/>
                <Link to={`/items`}><button className="submit" align="center">Sign in</button></Link>
            </form>
        </div>
        
        </>
        
    )
}

export default Loginb;

