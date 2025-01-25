const { Module } = require("module");

sum = (a,b) => a+b;
sub = (a,b) => a-b;
mul = (a,b) => a*b;
div = (a,b) => a/b;

module.exports.sum = (a,b) => a+b;
module.exports.sub = (a,b) => a-b;
module.exports.mul = (a,b) => a*b;
module.exports.div = (a,b) => a/b;

exports.sum = (a,b) => a+b;
exports.sub = (a,b) => a-b;
exports.mul = (a,b) => a*b;
exports.div = (a,b) => a/b;

obj={
    sum:sum,
    sub:sub,
    mul:mul,
    div:div
}
module.exports =obj

// ---------------------------------------------------------------------------//


// ALTERNATIVES //

// Module.exports={
//     sum:sum,
//     sub:sub,
//     mul:mul,
//     div:div 
// }

// ---------------------------------------------------------------------------//


// module.exports.sum = (a,b) => a+b;
// module.exports.sub = (a,b) => a-b;
// module.exports.mul = (a,b) => a*b;
// module.exports.div = (a,b) => a/b;

// ---------------------------------------------------------------------------//

// exports.sum = (a,b) => a+b;
// exports.sub = (a,b) => a-b;
// exports.mul = (a,b) => a*b;
// exports.div = (a,b) => a/b;