const express=require("express");
const router=express.Router();

const fs=require("fs");
const todopath="./data.json/todos.json";

const readtodoData=()=>{
    const dt=fs.readFileSync(todopath);
    return JSON.parse(dt);
};

const writetodoData=(dt)=>{
    fs.writeFileSync(todopath,JSON.stringify(dt));
};

router.post("/",(res,req)=>{
    const todos=readtodoData();
    const newtodo={id:Date.now(),...req.body};
    todos.push(newtodo);
    writetodoData(todos);
    res.status(201).json(newtodo);
})


router.get("/",(req,res)=>{
    const todos=readtodoData();
    res.json(todos);
})

router.put("/:id",(req,res)=>{
    const todos = readtodosData();
    const todoIndex=todos.findIndex(todo=>todo.id==req.params.id);
    if(todoIndex!==-1){
        todos[todoIndex]={...todos[todoIndex], ...req.body }
        writetodosData(todos);
        res.json(todos[todoIndex])
    }else {
        res.status(404).json({ message: 'todo not found' });
      }

})

router.delete("/:id",(res,req)=>{
    const todos = readtodosData();
    const updatedtodos=todos.filter(todo=>todo.id!==req.params.id);
    if(updatedtodos.length !== todos.length){
        writetodosData(updatedtodos);
        res.status(200).json({ message: 'todo deleted' });
}else {
    res.status(404).json({ message: 'todo not found' });
  }
})

module.exports = router;