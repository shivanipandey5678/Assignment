// Import required modules
const express = require("express");
const fs = require("fs"); // File system module to read and write files
const server = express(); // Create an Express server

// Middleware to parse incoming JSON data
server.use(express.json());

// API to get all the todos
server.get("/gettodos", (req, res) => {
  try {
    // Read the data from db.json file
    let data = fs.readFileSync("db.json", "utf-8");
    // Send the parsed data as response
    res.send(JSON.parse(data));
  } catch (error) {
    // Handle any errors
    console.log("Something went wrong", error);
    res.status(500).send("An error occurred while fetching todos.");
  }
});

// API to add a new todo to the database
server.post("/todopost", (req, res) => {
  try {
    // Get the new todo from the request body
    const newTodo = req.body;
    // Read the existing todos
    const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    // Add the new todo to the todos array
    data.todos.push(newTodo);
    // Write the updated data back to the file
    fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
    res.send("Thank you for posting todos");
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(500).send("An error occurred while adding the todo.");
  }
});

// API to update todos with even IDs where completed is false
server.patch("/updatetodos", (req, res) => {
  try {
    // Read the existing todos
    const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    // Loop through todos and update even IDs with completed = false
    data.todos = data.todos.map(todo => {
      if (todo.id % 2 === 0 && !todo.completed) {
        todo.completed = true;
      }
      return todo;
    });
    // Save the updated todos back to the file
    fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
    res.send("Updated todos with even IDs where completed status was false.");
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(500).send("An error occurred while updating todos.");
  }
});

// API to delete all todos where completed is true
server.delete("/deletetodos", (req, res) => {
  try {
    // Read the existing todos
    let data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    // Filter out todos where completed is true
    data.todos = data.todos.filter(todo => !todo.completed);
    // Save the filtered todos back to the file
    fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
    res.send("Deleted all todos with completed status as true.");
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(500).send("An error occurred while deleting todos.");
  }
});

// Start the server on port 8000
server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
