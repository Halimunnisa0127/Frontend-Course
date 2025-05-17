//mapPracties.js

// 1. Create an array of 5 movie objects with: title, rating, price
const movies_and_details = [
    {
        movieTitle: "kalki",
        rating: 7,
        price: 300
    },
    {
        movieTitle: "salar",
        rating: 6.6,
        price: 200
    },
    {
        movieTitle: "saaho",
        rating: 5.1,
        price: 250
    },
    {
        movieTitle: "Baahubali1",
        rating: 8.0,
        price: 300
    },
    {
        movieTitle: "Darling",
        rating: 7.2,
        price: 150
    }

]
console.log(movies_and_details);



// 2. Using map to create a "premium" price (original price + 100)
const movies = [
    { title: "HIT: The Third Case", price: 200 },
    { title: "Pushpa", price: 300 },
    { title: "Final Destination Bloodlines", price: 200 },
    { title: "Subham", price: 200 },
    { title: "Game Changer", price: 280 },
];

const premiumPrice = movies.map(movie1 => {
    return {
        tite: movie1.title,
        originalPrice: `₹${movie1.price}`,
        premiumPrice: `₹${movie1.price + 100}`
    };
});
console.log("movies in PremiumPrice:", premiumPrice);


// 3. Using map to create movie recommendations based on rating
const popularmovies = [
    { movieTitle: "Baahubali1", rating: 8.0, price: 300 },
    { movieTitle: "Saindhav", rating: 5.1, price: 150 },
    { movieTitle: "K.G.F: Chapter 2", rating: 8.2, price: 250 },
    { movieTitle: "Game Changer", rating: 5.3, price: 200 },
    { movieTitle: "RRR", rating: 7.8, price: 300 },
    { movieTitle: "Lucky Baskhar", rating: 8, price: 200 },
    { movieTitle: "Eagle", rating: 5.9, price: 200 },
    { movieTitle: "KA", rating: 7, price: 200 },
    { movieTitle: "Double iSmart", rating: 2.9, price: 200 }
];

const recommendations = popularmovies.map(movie => {
    return {
        title: movie.movieTitle,
        recommendation: movie.rating > 6 ? "recommended" : "Skip",
        price: movie.price
    };

});
console.log(recommendations);


//Final Project
// 1. Use map to display all movies with their details
const movieCollection = [
    {
        title: "Inception",
        price: 200,
        seatsAvailable: 50,
        rating: 4.5
    },
    {
        title: "kalki",
        price: 300,
        seatsAvailable: 0,
        rating: 7,
    },
    {
        title: "Lucky Baskhar",
        price: 200,
        seatsAvailable: 10,
        rating: 8
    },
    {
        title: "RRR",
        price: 300,
        seatsAvailable: 20,
        rating: 7.8,
    },
    {
        title: "K.G.F:Chapter2",
        price: 250,
        seatsAvailable: 0,
        rating: 8.2,
    },
];

//using map
movieCollection.map(movie => {
    console.log(`Title: ${movie.title}, 
    Price: ₹${movie.price},
    Seats Available: ${movie.seatsAvailable},
    Rating: ${movie.rating}`);
});
console.log(movieCollection);


// 2. Use map to show only available movies
const movieDetails = [
    {
        title: "Bahubali2",
        price: 300,
        seatsAvailable: 0,
        rating: 4.5
    },
    {
        title: "Game Changer",
        price: 200,
        seatsAvailable: 20,
        rating: 7,
    },
    {
        title: "KA",
        price: 300,
        seatsAvailable: 30,
        rating: 8
    },
    {
        title: "HIT:The Third Case",
        price: 200,
        seatsAvailable: 20,
        rating: 7.8,
    },
    {
        title: "Pushpa",
        price: 300,
        seatsAvailable: 0,
        rating: 8.2,
    },
];


//using map
const availablemovies = movieDetails
    .filter(movie => movie.seatsAvailable > 0)
    .map(movie => ({
        title: movie.title,
        price: movie.price,
        seatsAvailable: movie.seatsAvailable,
        rating: movie.rating
    }));
console.log(availablemovies)



// 3. Use map to apply weekend surge pricing
// Sample data: list of bookings with day and base price
const bookings = [
    { day: 'Monday', price: 100 },
    { day: 'Friday', price: 130 },
    { day: 'Saturday', price: 160 },
    { day: 'Sunday', price: 140 },
    { day: 'Wednesday', price: 90 }
];

// Surge multiplier
const weekendSurgeMultiplier = 1.5;

const updatedBookings = bookings.map(booking => {
    const isWeekend = booking.day === 'Saturday' || booking.day === 'Sunday';
    const updatedPrice = isWeekend
        ? booking.price * weekendSurgeMultiplier : booking.price;

    return {
        ...booking,
        finalPrice: updatedPrice
    };
});
console.log(updatedBookings);


