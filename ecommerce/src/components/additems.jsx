import { useState , useEffect } from "react";
import { addItem } from "../service/api";
import {uploadFile} from "../service/api";
import { useNavigate } from 'react-router-dom';


const intialValue = {
    productname: '',
    productdesc: '',
    picture: '',
    price: '',
    username: 'harshil',
    category: '',
}

const Additems = () => {


    const [additem, setAdditem] = useState(intialValue);
    const [file , setFile] = useState('');
    const [image , setImage] = useState('');
    const url = additem.picture ? additem.picture : "https://images.unsplash.com/photo-1590600504282-30e4dc6f8fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"
    const history = useNavigate();

    
    useEffect(()=>{
        const getImage = async()=>{
            if(file){
                const data = new FormData();
                data.append("name" , file.name);
                data.append("file" , file);

                //await uploadFile(data);
                const image = await uploadFile(data);
                additem.picture = image.data;
                setImage(image.data);
            }

        }
        getImage();
    },[file])

    const handleChange = (e) => {
        setAdditem({ ...additem, [e.target.name]: e.target.value })
    }
    const saveItem = async () => {
        await addItem(additem);
        history("/items");
    }
    return (
        <>
            <h1 className="heading">Add Your Product</h1>
            <form className="row g-3" >
                <div className="col-md-12" >
                    <img
                        style={{
                            height: '200px',
                            width: '200px'
                        }}
                        src={url} alt="img"
                    />
                </div>
                <label htmlFor='fileinput' >Add img</label>
                <input
                    type="file"
                    id="fileinput"
                    style={{ display: 'none' }}
                    onChange = {(e) => setFile(e.target.files[0])}

                />

                <div className="col-md-12">
                    <label htmlfor="productname" class="form-label">Product name</label>
                    <input onChange={(e) => handleChange(e)} type="text" className="form-control" id="productname" name="productname" />
                </div>

                <div className="col-md-12">
                    <label htmlfor="productdesc" className="form-label">Product description</label>
                    <input onChange={(e) => handleChange(e)} type="text" className="form-control" id="productdesc" name="productdesc" />
                </div>

                <div className="col-md-12">
                    <label htmlfor="price" className="form-label">Price</label>
                    <input onChange={(e) => handleChange(e)} type="number" className="form-control" id="price" name="price" />
                </div>
                <div>
                    <label>Select Articraft Type: </label>
                    <select onChange={(e) => handleChange(e)} name="category" type="text">
                        <option>Wooden</option>
                        <option>Silk</option>
                        <option>Clay</option>
                        <option>Khadi</option>
                    </select>
                </div>

                <div class="col-12">
                   
                </div>
                <div className="col-12">
                    <button onClick={() => saveItem()} type="submit" className="btn btn-primary">Add Item</button>
                </div>
            </form>
        </>
    )
}

export default Additems;