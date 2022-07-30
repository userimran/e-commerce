import  express  from "express"
import './db/connection.js'
import cors from 'cors'
import router from "./routes/router.js"
import mongoose from "mongoose"
// import DefaultData from "./DefaultData.js"

const app = express()
const PORT = 8000;
app.listen(PORT,()=>{
    console.log("server is running");
})

app.use(express.json())
app.use(cors())
app.use(router)


// console.log(productSchema);

// const productSchema = new mongoose.Schema({
//     name: String,
//     qty: Number,
//     color: String,
//     price: Number,
//     company: String,
//     status: String
// });

// app.get('/getproducts', async (req, res)=>{
//     const Product = mongoose.model('products', productSchema);
//     // let data = await Product.find({name:'iphone 8'})
//     let data = await Product.find({})
//     console.log('api-data:::> ', data);
//     res.status(200).json(data);
// })


// DefaultData()
