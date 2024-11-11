// import express from "express"
// import cors from "cors"
// import { connectDB } from "./config/db.js"
// import foodRouter from "./routes/foodRoutes.js"
// import userRouter from "./routes/userRoutes.js"
// import 'dotenv/config'
// import cartRouter from "./routes/cartRoutes.js"
// import orderRouter from "./routes/orderRoutes.js"





// //app config
// const app = express()
// const port = 5000


// //middleware
// app.use(express.json()) 
// // whenever we get req from frontend to backend theat will be pass through this json
// app.use(cors()) //we can access backend from any frontend

 

// //db.connection
// connectDB();

// // api endpoints

// app.use("/api/food",foodRouter)
// app.use("/images",express.static('uploads'))
// app.use("/api/user",userRouter)
// app.use("/api/cart",cartRouter)
// app.use("/api/order",orderRouter)



// app.get("/",(req,res)=>{
//     res.send("API Working")
// })


// app.listen(port,()=>{
//     console.log(`server started on http://localhost:${port}`)

// })

// //mongodb+srv://zarnakalsariya:Zarnagopi_kali@cluster0.0n0x8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


// server.js
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

// App config
const app = express();
const port = 5000;

// Middleware
app.use(express.json()); 
app.use(cors()); // we can access backend from any frontend

// Database connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});

