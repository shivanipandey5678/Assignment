const crypto=require("crypto");
let args=process.argv;
let operation=args[2];
let number1=Number(args[3]);
let number2=Number(args[4]);
// process.argv return array .using index to invoke values

function GenerateRandomNumber(length){
    if(length<=0 || isNaN(length)){
        console.log("provide length for random number generation")
        //if -ve length,zero or invalide length given
    }else{
        crypto.randomBytes(length,(err,buf)=>{
            if(err){
                console.log(err);
                return;
            }
            else{
                let newNumber=buf.toString("binary");
                console.log("Generated Random Number:",newNumber)
            }
           
        })
    }
   
}


if(args.length===4){
    //using switch for handling different different operations if only 2 argument given
    switch (operation){
        case "sin":{
            console.log(Math.sin(number1));
           }
           break;
        case "cos":{
            console.log(Math.cos(number1));
           }
           break;
        case "tan":{
            console.log(Math.tan(number1));
           }
           break;
        case "random":{
            GenerateRandomNumber((number1))
        }
        break;

        default:
            console.log("Invalid operation. Please use 'sin', 'cos', 'tan', or 'random'.");
    }
    //handling only one value situation in sin,cos,tan situation .
}else if(operation==="sin"|| operation==="cos" || operation==="tan" && args.length!==4){
    console.log("invalide input")
}
switch (operation){
   case "add":{
    console.log(number1+number2);
   }
   break;

   case "sub":{
    console.log(number1-number2);
   }
   break;

   case "mult":{
    console.log(number1*number2);
   }
   break;

   case "divide":{
    if(number2!==0){
        console.log(number1+number2);
    }else{
        console.log("denominater should not be zero")
    }
   
   }
   break;
}