const express = require("express");
const mainrouter=require("./routes/index")
const app=express()

app.use("/api/v1",mainrouter)
