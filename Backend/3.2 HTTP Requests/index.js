import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>Hello World!</h1>");
})

app.get("/about", (req, res)=>{
    res.send("<h1>About me</h1><p>My name is ABC.</p>");
})
app.get("/contact", (req, res)=>{
    res.send("<h1>Contact</h1><p>+91 6263648414</p>");
})

app.listen(port , () => {
    console.log(`server running on port ${port}.`);
})