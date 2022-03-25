import { request, response } from "express";
import Additems from "../schema/additems-schema.js";

export const addToCart = async (request, response) => {
    console.log(request.body);
    try {
        const cartItem = await new addToCart(request.body);
        cartItem.save()
        response.status(200).json('Item added in cart successfully')
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

export const addItem =async (request , response)=>{
    console.log(request.body);
    try{
        const item = await new Additems(request.body);
        item.save();
        response.status(200).json('blog saved successfully');
    }catch(error){
        response.status(500).json(error);
    }
}

export const getAllItems = async(request , response)=>{
    let username = request.query.username;
    let category = request.query.category;
    let items;
    try{
        if(username)
            items = await Additems.find({username: username});
        else if(category)
            items = await Additems.find({category: category});
        else
            items = await Additems.find({});
        
        response.status(200).json(items);
    }catch(error){
        response.status(500).json(error);
    }
}
export const getItem = async(request , response)=>{
    try{
        let item = await Additems.findById(request.params.id);
        response.status(200).json(item);
      }catch(error){
          response.status(500).json(error);
      }
}