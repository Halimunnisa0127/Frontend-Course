// Global scope
let Name = "Halimunnisa";
let practiceScope = "i am practice scopes in Javascript.";
let backend = "I am aslo skilled in backend.";
let goal = "I Want to become a FullStack Developer.";
//Function Scope
function greetingfunction() {
    const greetUser = "Hello";
    let Graduation = "I am MCA graduate";
    let profession = "I am a frontend developer.";
    let skils = "I am skilled in HTML5, CSS3, and JavaScript.";
    let learning = "I am learning javascript";
    let backendSkills = "python,SQL,My sql,django";
    console.log(greetUser);
    console.log(Graduation);
    //Block scope
    if (true) {
        const identifier = "My name is";
        const exclamation = "!";
        console.log(identifier + " " + Name + "" + exclamation);// Can access global scope
        console.log(profession);// Can access function scope

    }
   // console.log(identifier + " " + Name + "" + exclamation); error
    console.log(skils);
    console.log(learning);
    console.log(practiceScope);// Can access global scope
    console.log(backend + " " + backendSkills);// Can access global scope and function scope
}
greetingfunction()
//error
//console.log(skils); 
    //console.log(learning);
   // console.log(practiceScope); 
    //console.log(backend + " " + backendSkills); 
console.log(goal);
//console.log(learning);// Error: function scope