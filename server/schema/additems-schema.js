import mongoose from "mongoose"

const AddItemsSchema = mongoose.Schema({
    productname: {
        type: String,
        required: true,
        
    },
    productdesc: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: false,
    },
    price: {
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    }
    
})

const additems = mongoose.model('additems' , AddItemsSchema);

export default additems;