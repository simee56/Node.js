const fs = require("fs");


// //creating a file
// fs.writeFile("./hey.txt", "this is John.",(err) => {});     


// // reading a file

// fs.readFile("./info.txt", "utf-8", (err, result) =>{            
//     if(err){
//         console.log("Error : ", err);
//     }
//     else{
//         console.log("Result : ", result);
//     }
// })


// //append function

// fs.appendFile("./info.txt", "+9444444", (err) => {
//     if(err){
//         console.log("Error : ", err);
//     }
//     else{
//         console.log("Result : ");
//     }
// })


fs.chmod("./info.txt", 0o75, (err) => {
    if (err) {
        console.log("Error :", err)
    }
    else{
    console.log('The permissions for file "my_file.txt" have been changed!')
    }
}); 

