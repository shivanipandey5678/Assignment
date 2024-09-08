let http=require("http");


const app=express();


// Route for /

app.get("/",(req,res)=>{
    res.send("Welcome to the Express.js Server!")
});

// Route for /about

app.get("/about",(req,res)=>{
    res.send("This is a simple web server built using Express.js.")
});

// Route for /contact
app.get("/contact",(req,res)=>{
    res.json({
        email: "student@example.com",
        phone: "123-456-7890",
    });
});

// Route for /random

app.get("/random",(req,res)=>{
    const randomNumber=Math.random(Math.random()*100)+1;
    res.send(`Random number: ${randomNumber}`)
})

app.use((req,res)=>{
    res.status(404).send("404 Page Not Found");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });