//objectPractice.js
//Task1
//student object and its details

//student object1
const student1 = {
    Name: "John",
    Age: 20,
    Roll_No: 2241074,
    Grade: "A",
    greet: function(){
    return `Hello my name is ${this.Name}`;
}
};
console.log(student1);
console.log(student1.greet());
console.log("key in student1:",Object.keys(student1));
console.log("values in student1:",Object.values(student1));
console.log(Object.entries(student1));


//student object2
const student2 = {};
student2.Name = "Sara";
student2.Age = 23;
student2.Roll_No = 2241112;
student2.Grade = "A";
console.log(student2);
console.log(student2.Grade);   


//student object3
const student3 = {};
student3["Name"] = "Mike";
student3["Age"] = 20;
student3["Roll_No"] = 2241065;
student3["Grade"] = "A";
console.log(student3);
console.log(student3["Age"]);


//Task2
//mobile phone and its details

//mobile object1
const mobile1 = {
    mobileName: "Redmi9",
    price: 8999,
    color: "Blue",
    RAM: "4GB",
    InternalStorage: 64,
    Battery: "5000 mAh"
};
console.log(mobile1);
console.log(mobile1.price);   


///mobile object2
const mobile2 = {};
mobile2.mobileName = "POCO M3";
mobile2.price = 10,399;
mobile2.color = "Black";
mobile2.RAM = "6 GB ";
mobile2.InternalStorage = 128;
mobile2.Battery=" 6000 mAh";
console.log(mobile2);


///mobile object3
const mobile3={};
mobile3["moblieName"]="Samsung Galaxy S24 ",
mobile3["price"]=35,248;
mobile3["color"] = "Black";
mobile3["RAM"]= "8 GB ";
mobile3["InternalStorage"] = 128;
mobile3["Battery"]=" 4700 mAh";
console.log(mobile3);
console.log(mobile3["moblieName"]);