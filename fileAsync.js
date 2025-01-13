const fs = require("fs");


//creating a file
fs.writeFile("./hey.txt", "this is John.",(err) => {});     


// reading a file

fs.readFile("./info.txt", "utf-8", (err, result) =>{            
    if(err){
        console.log("Error : ", err);
    }
    else{
        console.log("Result : ", result);
    }
})


//append function

fs.appendFile("./info.txt", "\nand enjoy this journey", (err) => {
    if(err){
        console.log("Error : ", err);
    };
});
