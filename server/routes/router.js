import express, {Router} from "express";
const router = express.Router()
import Products from "../models/productSchema.js";

// router.get("/", async(req,res)=>{
//     res.status(209).json("hii code for a interview ")
// })

// router.get('/getproducts', getproducts)
router.get("/getproducts", async(req,res)=>{
    try {
        let productData = await Products.find()
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
        console.log("api se data aa rha h ye bo wla ha", productData)
        res.status(209).json(productData)
    } catch (error) {
        console.log("error",error.message)
    }
})

export default router;