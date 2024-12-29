const fs = require("fs");

//sync file
fs.writeFileSync("./hey.txt", "this is John");

//async file 
fs.writeFile("./hey.txt", "this is John async",(err) => {});
