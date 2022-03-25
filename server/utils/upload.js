
import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url:'mongodb+srv://parth:parthsih76@cluster0.dmljk.mongodb.net/Project0?retryWrites=true&w=majority',
    options: {useUnifiedTopology : true , useNewUrlParser: true},
    file: (request , file)=>{
        const match = ["image/png" , "image/jpg"];

        if(match.indexOf(file.memeType) === -1)
            return `${Date.now()}-item-${file.originalname}`;

        return{
            bucketName: "photos",
            filename: `${Date.now()}-item-${file.originalname}`,
        }
    }

})

export default multer({ storage });