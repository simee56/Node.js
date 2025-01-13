//to use ECMAScript module we have to add "type" : "module" in our package.json file.

import {info} from "./commonJsModule.mjs";
info();

import {info2} from "./commonJsModule.mjs";
info2();

//OR 
// import{info2 as info } from "./commonJsModule.mjs";
// info();     //this will console the value of info2.

import info23 from "./commonJsModule.mjs";     // there is no info3 function but it will give the value of Default function. 
info23();
