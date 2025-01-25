// n=10
// for (let i = 0; i < n; i++) {
//     console.log(i)
// }

// run on terminal and pass parameters while running 
argv = process.argv

for (let i = 0; i < argv.length; i++) {
    console.log("hi ",argv[i]);
}
console.log(argv)



console.log(typeof argv)