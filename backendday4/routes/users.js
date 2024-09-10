const express=require("express");
const router=express.Router();

const fs=require("fs");
const userpath="./data.json/users.json";

const readUserData=()=>{
    const dt=fs.readFileSync(userpath);
    return JSON.parse(dt);
};

const writeUserData=(dt)=>{
    fs.writeFileSync(userpath,JSON.stringify(dt));
};

router.post("/",(res,req)=>{
    const users=readUserData();
    const newUser={id:Date.now(),...req.body};
    users.push(newUser);
    writeUserData(users);
    res.status(201).json(newUser);
})


router.get("/",(req,res)=>{
    const users=readUserData();
    res.json(users);
})

router.put("/:id",(req,res)=>{
    const users = readUsersData();
    const userIndex=users.findIndex(user=>user.id==req.params.id);
    if(userIndex!==-1){
        users[userIndex]={...users[userIndex], ...req.body }
        writeUsersData(users);
        res.json(users[userIndex])
    }else {
        res.status(404).json({ message: 'User not found' });
      }

})

router.delete("/:id",(res,req)=>{
    const users = readUsersData();
    const updatedUsers=users.filter(user=>user.id!==req.params.id);
    if(updatedUsers.length !== users.length){
        writeUsersData(updatedUsers);
        res.status(200).json({ message: 'User deleted' });
}else {
    res.status(404).json({ message: 'User not found' });
  }
})

module.exports = router;