import "../../styles/loginb.css";
import {Link} from "react-router-dom";
import React from "react";


const Logins = () => {
    return (
        <>
        <h1 className="heading">Login for Seller</h1>
        <div className="main-login">
            <p className="sign" align="center">Log in</p>
            <form className="form1">
                <input className="un " type="text" align="center" placeholder="Username"/>
                <input className="pass" type="password" align="center" placeholder="Password"/>
                <Link to={`/add`}><button className="submit" align="center">Sign in</button></Link>
            </form>
        </div>
        
        </>
        
    )
}

export default Logins;