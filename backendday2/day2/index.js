 const fs=require("fs");
let args = process.argv;
let operation=args[2];
let filename=args[3];
let filename2=args[4];

switch(operation){
    case "read":{
        fs.readFile(filename,"utf8",(err,mes)=>{
           if(err){
            console.log("error",err)
           }else{
            console.log(mes)
           }
        })
    }


    case "delete":{
        fs.unlink(filename);
        console.log(`{filename} was deleted`)
    }

    case "append":{
        let CONTENT="keep going buddy\n";
        fs.appendFile(filename,CONTENT,(err)=>{
            if(err){
                console.log(`Error:{err}`)
            }
           console.log("appending sucessful")
        })
    }

    case "rename":{
        fs.rename(filename,filename2,(err)=>{
            if(err){
                console.log(`Error:{err}`)
            }
            console.log("rename sucessful")
        })
    }

    case "create":{
        content="new file created and text added";
        
        
        fs.writeFile(filename,content,(err)=>{
            if(err){
                console.error('Error writing to file', err);
            }else{
                console.log('File has been created successfully.');
            }
        })
    }

    case "list":{
        fs.readdir(filename,(err,ans)=>{
            if(err){
                console.log(err)
            }else{
                console.log(ans)
            }
        })
    }
    default:{
        console.log(`invalide operation ${operation}`)
    }
}



