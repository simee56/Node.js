const path = require('path');

let fileName = path.parse(__filename);
let baseName = path.basename(__filename);
let extName = path.extname(__filename);

console.log(fileName);
console.log(baseName);
console.log(extName);

