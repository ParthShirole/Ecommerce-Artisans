import { Grid, makeStyles } from "@material-ui/core";
import Viewitem from "./viewitem";
import { useLocation } from "react-router-dom";
import { useState , useEffect} from "react";
import { getAllItems } from "../service/api";
import { Link } from "react-router-dom";
import "../styles/viewitems.css";



const Viewitems=()=>{
    const [items , setItems] = useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchData = async()=>{
            let data = await getAllItems(search);
            console.log(data);
            setItems(data);
        }
        fetchData();
    },[search])


    return(
        <div className="explore-main">
            <h1 className="explore-heading">Explore</h1>
            {items.map(item => (
                
                <div className="card">
                    <Link to={`/items/${item._id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Viewitem  item={item}/>
                    </Link>
                </div>
                    
                
            ))} 
        </div>
    )
}

export default Viewitems;