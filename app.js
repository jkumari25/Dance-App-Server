const express= require('express');
const errorMiddleware= require("./middlewares/error");
const cors= require('cors');

const app= express();
app.use(express.json());
app.use(cors({
    origin:"*"
}));

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

const contact= require("./routes/contactRoutes");
const video= require("./routes/videoRoutes");
const image= require("./routes/imageRoutes");

app.use("/api/v1",contact);
app.use("/api/v1",video);
app.use("/api/v1",image);

//Middleware for errors
app.use(errorMiddleware);

module.exports= app