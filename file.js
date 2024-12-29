//creating a file

const fs = require("fs");

// fs.writeFileSync("./hey.txt", "this is John");  //sync file

fs.writeFile("./hey.txt", "this is John async",(err) => {});  //async file 


// reading a file

fs.readFile("./info.txt", "utf-8", (err, result) =>{    //async
    if(err){
        console.log("Error : ", err);
    }
    else{
        console.log("Result : ", result);
    }
})

// const result =fs.readFileSync("./info.txt", "utf-8");  //sync
// console.log(result);
