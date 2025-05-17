//Object Practice:

//A books  object1
const book1 = {
    name: "Atomic Habits",
    price: 128,
    author: "james clear",
    publish_date: "16 - 10 - 2018",
    language: "Engish"

};
console.log(book1);

const book1update = {
    name: "Don Quixote",
    author: "Miguel de Cervantes"
}
const update = {
    book1,
    book1update,
}
console.log(update);


//A ooks  object2
const book2 = {};
book2.name = "Macbeth";
book2.price = 135;
book2.author = "William Shakespeare";
book2.publish_date = 1623;
book2.language = "Engish";
console.log(book2);


//A books  object3
const book3 = {};
book3["name"] = "Pride and Prejudice";
book3["price"] = 314;
book3["author"] = "Jane Austen";
book3["publish_date"] = 1984;
book3["language"] = "Engish";
console.log(book3);



//A car object1
const car1 = {
    carname: "Aston Martin Valkyrie",
    carprice: "₹20 crore",
    officially_unveiled: "26-7-2016"

}


//A car object2
console.log(car1);
const car2 = {};
car2.carname = "Bugatti Centodieci";
car2.carprice = "₹64 Cr";
car2.officially_unveiled = "16-8-2019"
console.log(car2);


//A car object3
const car3 = {};
car3["carname"] = "rolls-royce sweptail";
car3["carprice"] = "₹108.65 crores";
car3["officially unveiled"] = "27-5-2017"
console.log(car3);



// restaurant object1
const restaurant1 = {
    restaurantName: "Avartana",
    restaurantPlace: "Chennai",
    popularItems: "Stir Fried Chicken",
    itemPrice: 4000
}
console.log(restaurant1);


//restaurant object2
const restaurant2 = {};
restaurant2.restaurantName = "The Bombay Canteen";
restaurant2.restaurantPlace = "Mumbai";
restaurant2.popularItems = "Mango Trifle";
restaurant2.itemPrice = 330;
console.log(restaurant2);


//restaurant object3
const restaurant3 = {};
restaurant3["restaurantName"] = "Indian Accent";
restaurant3["restaurantPlace"] = "Delhi";
restaurant3["popularItems"] = "Ghee Roast Soya Boti";
restaurant3["itemPrice"] = 850;
console.log(restaurant3);



//Array Practice:

//cities Array1
const citiesArray1 = ["Agra:Taj Mahal", "Delhi:Red Fort", "Amritsar:Golden Temple", "Udaipur:kumbhalgarh Fort", ""];
console.log(citiesArray1)


//cities Array2
const citiesArray2 = [];
citiesArray2[0] = "Jaipur:Amer Fort";
citiesArray2[1] = "Goa:Aguada";
citiesArray2[2] = "Delhi:Indian Gate";
citiesArray2[3] = "Hydrabad:Charminar";
citiesArray2[4] = "srinar:Dal Lake";
console.log(citiesArray2);
console.log(citiesArray2["0"])


//friends Array1
const friendsArray1 = ["Sravani,Devi,karuna"];
console.log(friendsArray1)


//friends Array2
const friendsArray2 = [];
friendsArray2[0] = "Durganjali";
friendsArray2[1] = "Mamatha";
friendsArray2[2] = "Lavanya";
console.log(friendsArray2);



//Hobies Array1
const HobiesArray1 = ["listing storyies", "Reading books", "wacting cartoons"];
console.log(HobiesArray1)


//Hobies Array2
const HobbiesArray2 = [];
HobbiesArray2[0] = "Garening";
HobbiesArray2[1] = "cooking";
HobbiesArray2[2] = "playing games";
console.log(HobbiesArray2);
console.log(HobbiesArray2["2"])


