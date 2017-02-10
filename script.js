
console.log("right here");

let script = {};
script.hello = function (cb){
let result ="Hello World"; 
cb(result);
};


module.exports = script