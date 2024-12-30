const fs = require("fs");

//Creating a file
fs.writeFileSync("./hey.txt", "this is Amy");               


//Reading a file
const result =fs.readFileSync("./info.txt", "utf-8");          
console.log(result);
