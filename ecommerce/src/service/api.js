import axios from 'axios';
const URL = 'http://localhost:8000';

export const addItem=async(item)=>{
    try{
        return await axios.post(`${URL}/add` , item);
    }catch(error){
        console.log("Error while calling addItem api" , error);
    }
};
export const getAllItems=async(param)=>{
    try{
        let response = await axios.get(`${URL}/items${param}`);
        return response.data;
    }catch(error){
        console.log("Error while calling getAllItems api" , error);
    }
};
export const getItem=async(id)=>{
    try{
        let response = await axios.get(`${URL}/items/${id}`);
        return response.data;
    }catch(error){
        console.log("Error while calling getItem api" , error);
    }
};
export const uploadFile=async(data)=>{
    try{
        return await axios.post(`${URL}/file/upload` , data);
     
    }catch(error){
        console.log("Error while calling uploadFile api" , error);
    }
}

export const addToCart = async (cartItem) => {
    try {
        return await axios.post(`${URL}/cart`, cartItem);
    } catch (error) {

        console.log("Error while calling addToCart api", error);
        
    }
};