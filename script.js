
//+++++++++++++++++++++ Fie Systems on node JS++++++++++++++++
// Write file, read file,update file,append file,delete file,forder creation, copy,rename,move

// 1. Create a File 

const fileStstem = require('fs');

fileStstem.writeFile("Node,.txt","Learn Node js" , function(err){
    if(err) console.log(err);
    else console.log("File created successfully")
})