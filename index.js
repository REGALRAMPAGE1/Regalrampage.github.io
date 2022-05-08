const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "./public")));

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/geographie",(req,res)=>{
    res.render("geographie");
});

app.get("/scripts",(req,res)=>{
    res.render("scripts");
});

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})