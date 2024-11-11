import express from "express"
import { addFood, listFood,removedFood } from "../controllers/foodController.js"
import multer from "multer" // creating image storage system

const foodRouter = express.Router();

//img storage engine

const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()} ${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removedFood)















export default foodRouter;

