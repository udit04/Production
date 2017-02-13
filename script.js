let script = {};
script.hello = function (cb){
let result ="Hello World main"; 
cb(result);
};


module.exports = script