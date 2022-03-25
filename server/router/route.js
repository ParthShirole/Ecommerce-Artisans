import express from 'express';


import { addItem  , getAllItems , getItem} from '../controller/additem-controller.js';
import {uploadImage , getImage} from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();

router.post('/add' , addItem);
router.get('/items' , getAllItems);
router.get('/items/:id' , getItem);

router.post('/file/upload' , upload.single('file'), uploadImage);
router.get('/file/:filename' , getImage);

export default router;