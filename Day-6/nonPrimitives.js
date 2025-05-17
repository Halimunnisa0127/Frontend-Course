//nonPrimitive.js
//  Arrays
// Movie List Example
const movies = [
    "The good dinosaur",
    "Finding Dory",
    "Avatar",
    "Joker",
    "avengers Endgame",
    "king kong",
    "Tumbbad",
    "money heist"
];


//array and its length
console.log("Movies:", movies);
console.log("Number of movies:", movies.length);//length of the elemennts
movies.push("Harry Potter and the Philosopher's Stone") //Push element last 
console.log("Movies:", movies);
console.log("Number of movies:", movies.length);
movies.pop("Finding Dory")       //pop element last
console.log("Movies:", movies);
movies.unshift("Lucky Bhasker"); //insert element in first  place
console.log("Movies:", movies);
movies.shift("Lucky Bhasker");  //delete element in first place
console.log("Movies:", movies);
console.log(movies.indexOf("king kong"));
console.log(movies.slice(0, 4)); //start and end-1 


// Objects
// Movie Details Example
const movieDetails = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    price: {
        normal: 200,
        premium: 350
    },
    showTimings: ["10:00 AM", "2:00 PM", "6:00 PM"]
};

//movie1
const Movie1 = {
    movieTitle: "Final Destination Bloodlines",
    director: "Zach Lipovsky",
    year: 2025,
    ticketPrice: {
        normal: 200,
        premium: 350
    },
    showTimings: ["10:00 AM", "2:00 PM", "6:00 PM"]
}
console.log(Movie1)


//movie2
const Movie2 = {
    movieTitle: "HIT: The Third Case",
    director: "Sailesh Kolanu",
    year: 2025,
    ticketPrice: {
        normal: 200,
        premium: 350
    },
    showTimings: ["2:15 PM", "6:15 PM", "9:15 PM"]
}
console.log(Movie2)


//movie3
const Movie3 = {
    movieTitle: "Salaar: Cease Fire - Part 1",
    director: "Prashanth Neel",
    year: 2023,
    ticketPrice: {
        normal: 200,
        premium: 400
    },
    showTimings: ["10:00 AM", "2:00 PM", "6:00 PM"]
}
console.log(Movie3)




