
//+++++++++++++++++++++ Fie Systems on node JS++++++++++++++++
// Write file, read file,update file,append file,delete file,folder creation, copy,rename,move

// 1. Create a File 

// const fileStstem = require('fs');

// fileStstem.writeFile("Node,.txt","Learn Node js" , function(err){
//     if(err) console.log(err);
//     else console.log("File created successfully")
// })

// 2. Read a File

// const fs = require("fs");

// fs.readFile("script1.js","utf8",function(err,data){
//     if(err) console.log(err);
//     else console.log(data)
// })


//3. Append a File (Add more file on data)

// const fs = require("fs");

// fs.appendFile("script1.js", "//console.log","utf8",function(err){
// if(err) console.log(err);
// else console.log("The Append file was successfully")
// })

// 4. Rename the File

// const fs = require("fs");

// fs.rename("Node,.txt" , "Nodejs.txt" , function(err){
//     if(err) console.log(err);
//     else console.log("File Rename Sucessful")
// })

//5. Delete the File

// const fs = require("fs");

// fs.unlink("script1.js" , function(err){
//     if(err) console.log(err);
//     else console.log("File deleted Sucessful")
// })

// 6. Create a Folder

// const fs = require("fs");

// fs.mkdir("Learn Node JS" , function(err){
//     if(err) console.log(err);
//     else console.log("Folder created Sucessful")
// })

// 7. Read folder the File

// const fs = require("fs");

// fs.readdir("Learn Node JS", {withFileTypes:true}, function(err , files){
//     if(err) console.log(err);
//     else console.log(files)
// })

// 8. Delete folder

const fs = require("fs");

fs.rm("Learn Node JS/342" ,{recursive: true}, function(err){
    if(err) console.log(err);
    else console.log("Folder deleted Sucessful")
})