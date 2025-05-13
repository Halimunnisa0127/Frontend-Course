//global scope 
let globalscope = "Hi i am a global variable";
console.log(globalscope);
//Function scope
function myfunction() {
    let functionscope = "Hi i am a function variable";
    console.log(functionscope);
    console.log(globalscope);
    //block scope
    if (true) {
        let blocklevelscope = "I am inside the block";
        console.log(globalscope);
        console.log(functionscope);
        console.log(blocklevelscope);
    }
}
myfunction()
console.log(globalscope)
//console.log(functionscope);// Error: function scope
//console.log(blocklevelscope);// Error: blocklevel scope



//examples of scopes

//global scope
let x = 10;
console.log(x);

//function scope
function sumfunction() {
    let x = 20;
    let y = 30;
    let z = x + y;
    console.log(z);
    console.log(x);
    if (true) {
        let x = 40;
        for (let i = 0; i < 3; i++) {
            k = i * 10
            console.log(k);

        }
        console.log(x);
    }
    // function inside block  scope
    if (false) {
        let x = 100;

        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
        console.log(x);
    }
    console.log(x);
}
sumfunction()
//block  scope
if (false) {
    let x = 100;

    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(x);
}
console.log(x);
console.log(x);