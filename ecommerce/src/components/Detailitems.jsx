import { makeStyles , Box ,Typography , Button } from "@material-ui/core";
import {Link} from 'react-router-dom';
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { getItem } from "../service/api";
import { addToCart } from "../service/api"

const useStyles = makeStyles((theme)=>({
    container: {
        marginTop: '64px',
        padding: 30,
        [theme.breakpoints.down('md')]:{
            padding:10,
        }

    },
    img:{
        height: '50vh',
        width:'100%',
        objectFit: 'cover',
    },
    icons:{
        float: 'right',
        
    },
    icon:{
        margin: 5,
        padding: 4,

    },
    heading:{
        fontSize:45,
        fontWeight: 600,
        textAlign: 'center',
        margin: '50px 0 10px 0'
    },
    subheading:{
        color:'#878787',
        display: 'flex',
        [theme.breakpoints.down('sm')]:{
            display: 'block',
        },
        margin: '20px 0px'
    },
    link:{
        textDecoration: 'none',
        color: 'inherit',
    }

}));
const Detailitems =()=>{
    const classes = useStyles();
    const url = 'https://images.unsplash.com/photo-1590600504282-30e4dc6f8fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80';
    const [item , setItem] = useState({});
    const [cartitem, setCartitem] = useState();
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
    const handleChange = (e) => {
        setCartitem({...cartitem, [e.target.name]: e.target.value})
    }
    const saveInCart = async() => {
        await addToCart(cartitem)
        history("/cart")
    }

    return(
        <Box className={classes.container}>
            <img src={item.picture || url} alt="banner" className={classes.img}/>
        <Box className={classes.icons}>
            <Button onClick={() => saveInCart()}>Add to cart</Button>
        </Box>
        <Typography className={classes.heading}>{item.productname}</Typography>
        <Box className={classes.subheading}>
        <Link to ={`/items/?username=${item.username}`} className={classes.link} >
                <Typography>Seller: <span style={{fontWeight: '700'}}>{item.username}</span></Typography>
        </Link>
        </Box>
        <Typography>{item.productdesc}</Typography>
        <Typography>{item.category}</Typography>
        <Typography>{item.price}</Typography>
        <Box>
        <Link to ={`/items/?category=${item.category}`} className={classes.link} >
            <Typography>Recommended Products</Typography>
        </Link>
        </Box>
        
        </Box>
        
    )
}
export default Detailitems;