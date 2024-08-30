 const fs=require("fs");
 //importing fs
let args = process.argv;
let operation=args[2];
let filename=args[3];
let filename2=args[4];


switch(operation){
    //using switch for identifing operation
    case "read":{
        //first one is file from which u want to read,decoding lang,call abck function because it is an async function
        fs.readFile(filename,"utf8",(err,mes)=>{
           if(err){
            console.log("error",err)
           }else{
            console.log(mes)
           }
        })
        //applying break
        break;
    }


    case "delete":{
        fs.unlink(filename);
        console.log(`{filename} was deleted`)
    }
    //for deleting unlink is used
    break;

    case "append":{
        let CONTENT="keep going buddy\n";
        fs.appendFile(filename,CONTENT,(err)=>{
            if(err){
                console.log(`Error:{err}`)
            }
           console.log("appending sucessful")
        })
        break;
    }

    case "rename":{
        fs.rename(filename,filename2,(err)=>{
            if(err){
                console.log(`Error:{err}`)
            }
            console.log("rename sucessful")
        })
        break;
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
        break;
    }

    case "list":{
    
       
       fs.readdirSync(filename);
        break;
    }
    default:{
        console.log(`invalide operation ${operation}`)
    }
}



