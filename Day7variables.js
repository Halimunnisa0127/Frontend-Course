// Object Properties
// Create a post object:

const post = {
  id: "123",
  text: "Hello World",
  likes: 0
};

console.log(post);

// Try modifying:
post.likes = 1;          // Works New property shares
// post = {};           //  Error reassignment attempt.
post.shares = 0;         // Works New property shares

console.log(post);


// Block Scope & Function Memory

{
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); //  1
//console.log(b); //  ReferenceError
//console.log(c); //  ReferenceError



//Function Calls & Memory Allocation

function createUser(name) {
  let userId = Math.random();
  const timestamp = Date.now();
  var isActive = true;
  return { userId, name, timestamp, isActive };
}

let user1 = createUser("John");
let user2 = createUser("Jane");

console.log(user1);
console.log(user2);




// Assignment 1: Variable Types & Memory
// Instagram Post Variables
// Create these variables:
let postTitle = "My First Post";
let likesCount = 0;
const POST_ID = "POST123";
var isPublished = false;

// Try this:
console.log(postTitle);    // Should show: My First Post

postTitle = "Updated Post"; // Value updated using let

console.log(postTitle);
//POST_ID = "POST124";    //const - no reassignment
//console.log(POST_ID);    // This will error! 



//Assignment 2: Variable Scope
// Global Variables
let storyViews = 0;
const STORY_DURATION = 24; // hours

{
  //Block scope
  let storyFilter = "Normal";
  var storyLocation = "Hyderabad";
  const UPLOADED_TIME = "9:00 AM";
  console.log(storyFilter);
}

// Check what happens:
console.log(storyLocation);  // Works 
console.log(STORY_DURATION);
console.log(storyViews);
//console.log(storyFilter);    //  ReferenceError (block-scoped let)
//console.log(UPLOADED_TIME);  //  ReferenceError (block-scoped const)



//Assignment 3: Reference vs Value
//shallow copy

let userName = "john_doe";
let followerCount = 100;

let profile = {
  name: "John Doe",
  age: 25
};

let profile2 = profile;

console.log(profile, profile2);
// Try changing values:

userName = "jane_doe";     // Only userName changes
profile2.name = "Jane";    // Both profile and profile2 change!

console.log(userName);
console.log(followerCount);
console.log(profile, profile2);



//Assignment 4: //Deep copy
//Instagram User Profile
// Create these variables:
let Name = "john_doe";
let followersCount = 100;

console.log(Name);
console.log(followersCount);

let profile3 = {
  name: " Doe",
  age: 25
};

let profile4 = JSON.parse(JSON.stringify(profile3));
//parse is convert string to object
//Stringfy is convert object to string

console.log(profile3, profile4);

// Try to changing values:
Name = "jane_doe";     // Only userName changes
profile3.name = "Hari";    // only change profile3
profile4.name = "Jane";    // only change profile4

console.log(profile3, profile4);



//Assignment 5: Variable Hoisting

console.log(views);      // undefined
// console.log(likes);   // Error: ReferenceError 
// console.log(SHARES);  // Error: ReferenceErrorError: ReferenceError

var views = 100;
let likes = 50;  //(Temporal Dead Zone) 
const SHARES = 25;//(Temporal Dead Zone) 



// Assignment 6 :Stack vs Heap Memory
let x = 10;
let y = x;  //creates copy. store stack memory

console.log(x, y);

x = 20;

console.log(x, y);//only update x value

let obj1 = { value: 10 };
let obj2 = obj1; 

console.log(obj1, obj2)  //objs store heap memory

obj1.value = 20;
console.log(obj1, obj2)//Changes reflect in both — because both point to same reference.























