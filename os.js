const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
let upTime = os.uptime();
let hostName = os.hostname();
let type = os.type();

console.log(totalMemory);
console.log(freeMemory);
console.log(upTime);
console.log(hostName);
console.log(type);


