import { makeStyles , Box ,Typography , Button } from "@material-ui/core";
import {Link} from 'react-router-dom';
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { getItem } from "../service/api";
import '../styles/Detailitems.css';

const useStyles = makeStyles((theme)=>({
    // container: {
    //     // marginTop: '64px',
    //     padding: 30,
    //     [theme.breakpoints.down('md')]:{
    //         padding:10,
    //     }

    // },
    img:{
        height: '50vh',
        width:'50%',
        objectFit: 'cover',
        
    },
    
    heading:{
        fontSize:45,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0',
        color: 'white',
    },
    subheading:{
        color:'#878787',
        display: 'flex',
        [theme.breakpoints.down('sm')]:{
            display: 'block',
        },
        margin: '20px 0px',
        color: 'white',
    },
    link:{
        textDecoration: 'none',
        color: 'inherit',
    },

    
    

}));
const Detailitems =()=>{
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1590600504282-30e4dc6f8fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80';
    const [item , setItem] = useState({});
    let {id} = useParams();
    const history= useNavigate();
    useEffect(()=>{
        
        const fetchData = async()=>{
            
           let data = await getItem(id);
           console.log(data);
           setItem(data);
        }
        fetchData();
    },[])

    return(
    <>
             <Typography className="title" style={{fontSize: '1.9rem' , color: '#5BC0BE', paddingTop: '8px'}}>{item.category} Handicraft</Typography>
        <div className="product-details">
            <div>

        <Box  className="image">
            <img  src={item.picture || url} alt="banner" className="image"/>
        </Box>
            </div>
        <div>
    
        <Typography className="productname" style={{color: 'white' , fontSize: '2.5rem' ,fontWeight: '600'}}>{item.productname}</Typography>
        <Box className={classes.subheading}>
        <Link to ={`/items/?username=${item.username}`} className={classes.link} >
                <Typography>Seller: <span style={{fontWeight: '700'}}>{item.username}</span></Typography>
        </Link>
        </Box>
        <Typography style={{color: 'white'}}>{item.productdesc}</Typography>
        <Typography style={{color: 'white' , fontSize: '0.9rem' , fontWeight: '100',marginTop: '10px'}}>Category: {item.category}</Typography>
        <Typography style={{color:'white' , fontSize: '1.5rem' , fontWeight: '500'}}>Rs: {item.price}/-</Typography>
        <Box>
        <Link to ={`/items/?category=${item.category}`} className={classes.link} >
            <Typography style={{color: 'white' , background: '#3A506B' ,border: '10px solid #3A506B',borderRadius:'1rem', marginTop: '0.7rem' , textAlign: 'center'}}>Recommended Products</Typography>
        </Link>
        <Link to ={`/buynow`} className={classes.link} >
            <Box style={{alignItems: 'center'}}>
            <Typography style={{color: 'white' , background: '#3A506B' ,border: '10px solid #3A506B',borderRadius:'1rem', marginTop: '0.7rem'  ,textAlign: 'center',justifyContent: 'center'}}>Buy Now</Typography>
            </Box>
        </Link>
        </Box>
        </div>
        
        </div>
        
        
        
    </>
    )
}
export default Detailitems;