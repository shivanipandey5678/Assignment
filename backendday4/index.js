const express=require('express');
const server=express();
const userRoutes=require("./routes/users");
 const todoRoutes=require("./routes/todos");


// Middleware to parse JSON 
server.use(express.json());


server.use('/users', userRoutes); // All /users requests are handled in users.js
 app.use('/todos', todoRoutes); // All /todos requests are handled in todos.js



server.listen(3002,()=>{
    console.log("Server is running on http://localhost:3000")
})

