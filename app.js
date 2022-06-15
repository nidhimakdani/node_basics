//Start with console
// console.log("Hello Node");

//Learning Function 
/*function sum(a,b){
    return a+b;
}
console.log(sum(10,20));*/

//Using Export 
/*const helpers = require('./helpers');
console.log(helpers.sum(10,20));*/

//Arrow Function
/*const sum = (a,b) => {
    return a+b;
}
//you can write like this also c
//const sum = (a,b) => a+b;
console.log(sum(10,20));*/

// const helpers = require('./helpers');
// console.log(helpers.sum(10,20));

//Object destructuring 
/*const {sum} = require('./helpers');
console.log(sum(10,20));*/

//Using Node Core Modules 
/*const http = require('http');
const server = http.createServer((req, res) => {
    res.end("Hello from Node"); 
})
server.listen(3000);*/
//RUN THIS FILE ON TERMINAL AND GO TO http://localhost:3000/ YOU CAN SEE YOUR DATA

//Using NPM packages 

// To keep track of sever don't need to restart server after changes 
//install nodemon
//npm init will create package.json file
//npm i nodemon
//Change script file too
/*
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "nodemon app.js"
  },
*/
// Write this code
/*
const http = require('http');
const server = http.createServer((req, res) => {
    res.end("Hello from Node"); 
})
server.listen(3000);
*/