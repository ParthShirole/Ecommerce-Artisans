import {Box ,makeStyles, Typography} from '@material-ui/core';
import "../styles/viewitem.css"

const Viewitem=({item})=>{
    const url =item.picture || 'https://images.unsplash.com/photo-1590600504282-30e4dc6f8fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80';
    return(
        <>
        
        
        <Box className="card-container">
            <img className="card-image" src={url} alt="blog" />
            <p className="name-item">{item.productname}</p>
            {/* <Typography className="desc">{item.productdesc}</Typography> */}
            <p className="seller">Seller: {item.username}</p>
            <p className="price"><b className="price-text">₹ {item.price}</b></p>
        </Box>
        </>
    )
}

export default Viewitem;