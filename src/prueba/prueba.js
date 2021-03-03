const log = require('./logger');
const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);

log('message');

function sayHello(name){
    console.log('Hello ' + name);
}

function greetVar(){
    for(var i=0;i<3;i++){
        console.log("Hello!");
    }
    console.log(i);
    if(true){
        var color = "purple"    
    }
    console.log(color);
    var color;

    color = "red";
    var x = 10;
    var x = "asksdfn";

    console.log(dog);
    var dog = "Buck";

}

function greetLet(){
    for(let i=0;i<3;i++){
        console.log("Hello!");
    }
    //console.log(i);
    if(true){
        let color = "purple"    
    }
    //console.log(color);
    let pet = "pig";
    pet = "dog";

    let pig;

    // let x = 10;
    // let x = "asksdfn";
}

function greetConst(){
    if(true){
        const color = "purple"    
    }
    //console.log(color);  
    const  pet = "pig";
    //pet = "dog";
    const people = ["Steph","Klay"];
    people.push("Kevin");
    console.log(people);

    //const chicken;

    // const x = 10;
    // const x = "asksdfn";
}

var DEFAULT_RATE = 0.1;
var rate = 0.05;

function getRateVar(){
    if(!rate){
        var rate = DEFAULT_RATE;
    }

    return rate;
}

sayHello('Lesly');
greetVar();
greetLet();
greetConst();
console.log("Your rate is: ", getRateVar());