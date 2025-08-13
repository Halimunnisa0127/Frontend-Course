
import React from 'react';

function RestaurantData() {

    const RestaurantData = [
        {
            id: 1,
            name: "Hyderabadi Biryani",
            price: 200,
            cuisine: "Indian",
            rating: 4.5,
            image: "https://t3.ftcdn.net/jpg/06/08/84/24/240_F_608842413_hdYadp6uSC7c7pq6LJew9s8gPnRSgjln.jpg",
            category: "biryani"
        },
        {
            id: 2,
            name: "Veg Fried Rice",
            price: 100,
            cuisine: "Chinese",
            rating: 4.2,
            image: "https://as2.ftcdn.net/v2/jpg/06/09/35/79/1000_F_609357995_9f5MTF73kiu6UYAtpJZRT9BFWet4l3fX.jpg",
            category: "biryani"
        },
        {
            id: 3,
            name: "Paneer Biryani",
            price: 250,
            cuisine: "Indian",
            rating: 4.3,
            image: "https://t3.ftcdn.net/jpg/08/97/99/86/240_F_897998690_OVhBH6xzzmhjj0E1Hspe5BwnIfe8D8Ch.jpg",
            category: "biryani"
        },
        {
            id: 5,
            name: "Traditional Indian Thali",
            price: 150,
            cuisine: "Indian",
            rating: 4.1,
            image: "https://b.zmtcdn.com/data/dish_photos/75a/40ccc8326b81ab23b050c8546568375a.jpg?output-format=webp",
            category: "veg food"
        },
        {
            id: 6,
            name: "Mutton Biryani",
            price: 300,
            cuisine: "Indian",
            rating: 4.1,
            image: "https://t3.ftcdn.net/jpg/08/12/68/14/240_F_812681446_5pNOoePuhIcr2YBvpjmxmhAXcVtqzbvK.jpg",
            category: "biryani"
        },
        {
            id: 7,
            name: "Strawberry  ice cream",
            price: 150,
            cuisine: "Indian",
            rating: 4.1,
            image: "https://img.freepik.com/premium-photo/bowl-strawberry-ice-cream-with-bowl-strawberry-ice-cream-top_780838-3425.jpg",
            category: "icecream"
        },
        {
            id: 8,
            name: "Malai Kulfi",
            price: 100,
            cuisine: "Indian",
            rating: 4.1,
            image: "https://t3.ftcdn.net/jpg/08/14/60/06/240_F_814600640_hu6zBBsh209wd8r6KtJDhLoxqvDaL6Eb.jpg",
            category: "icecream"
        },
        {
            id: 9,
            name: "Mango Kulfi",
            price: 100,
            cuisine: "Indian",
            rating: 4.1,
            image: "https://t3.ftcdn.net/jpg/13/74/59/68/360_F_1374596805_bAWPz1wDScJVLRFx9s7FtDHi5HVLD96R.jpg",
            category: "icecream"
        },
        {
            id: 10,
            name: "Pistachios ice cream cones",
            price: 150,
            cuisine: "Indian",
            rating: 4.1,
            image: "https://img.freepik.com/premium-photo/top-view-delicious-pistachios-ice-cream-cones_23-2148425423.jpg",
            category: "icecream"
        },
        {
            id: 11,
            name: "double cheeseburger",
            price: 150,
            cuisine: "American", rating: 4.1,
            image: "https://t3.ftcdn.net/jpg/02/17/34/38/240_F_217343891_7xZvrtznPwvub4KI3ZmuSvJSyY3GUi7R.webp",
            category: "snacks"
        },
        {
            id: 12,
            name: "Keralas vegetarian meal ",
            price: 150,
            cuisine: "Indian",
            rating: 4.1,
            image: "https://t3.ftcdn.net/jpg/06/81/26/28/240_F_681262871_9cC2LxcCnEo4CoAKpn03GdQFumXQFz43.jpg",
            category: "veg food"
        },
        {
            id: 13,
            name: "Dosa",
            price: 100,
            cuisine: "Indian", rating: 4.0,
            image: "https://t4.ftcdn.net/jpg/01/86/33/71/240_F_186337169_B5SffLDHzatmWYIQcBVZovwlFAKe4P16.jpg",
            category: "veg food"
        },
        {
            id: 14,
            name: "Barnyard Millet Idli",
            price: 70,
            cuisine: "Indian",
            rating: 3.9,
            image: "https://yummy-valley.com/wp-content/uploads/2024/01/millet-idli.webp",
            category: "veg food"
        },
        {
            id: 15,
            name: "cheese pizza",
            price: 250,
            cuisine: "Italy",
            rating: 4.3,
            image: "https://t3.ftcdn.net/jpg/06/36/30/26/240_F_636302609_Tb1JtDTQ4zawO0ub6L2fHzlrW586f9tr.jpg",
            category: "snacks"
        },
        {
            id: 16,
            name: "Seekh Kebabs",
            price: 300,
            cuisine: "Indian",
            rating: 4.1,
            image: "https://t3.ftcdn.net/jpg/02/28/09/68/240_F_228096810_uZQVXuclYZoBcfDjvw9qttl000Pd1Wel.jpg",
            category: "snacks"
        },
        {
            id: 17,
            name: "samosa",
            price: 100,
            cuisine: "Indian",
            rating: 4.0,
            image: "https://t4.ftcdn.net/jpg/02/25/73/97/240_F_225739755_KDAnE7HIBzYfzHImvgojaVARAd2LLrZW.jpg",
            category: "snacks"
        },
        {
            id: 18,
            name: "Gulab Jamun",
            price: 300,
            cuisine: "Indian",
            rating: 4.3,
            image: "https://t4.ftcdn.net/jpg/10/00/17/87/240_F_1000178748_SlAmYv3pQo96i9j91rfI04jfWmSwlX0v.jpg",
            category: "sweets"
        },
        {
            id: 19,
            name: "chocolate ice cream cake",
            price: 600,
            cuisine: "Indian",
            rating: 4.1,
            image: "https://t3.ftcdn.net/jpg/02/51/20/80/240_F_251208043_TsR8QBni1H7stOAT1LcrJswXJpcb6vkP.jpg",
            category: "sweets"
        },
        {
            id: 20,
            name: "Rasmalai",
            price: 100,
            cuisine: "Indian",
            rating: 4.3,
            image: "https://t4.ftcdn.net/jpg/11/44/74/31/240_F_1144743102_Mqu0bXYyHIIAbN4tmjwmIgbwqrL6gplR.jpg",
            category: "sweets"
        },
        {
            id: 21,
            name: "Motichur laddu",
            price: 150,
            cuisine: "Indian",
            rating: 4.2,
            image: "https://t4.ftcdn.net/jpg/05/95/86/23/240_F_595862367_Mq2DESdDGSeEyDEvY5swpZsDz8lXQ9DX.jpg",
            category: "sweets"
        },
        {
            id: 22,
            name: "Veg Biryani",
            price: 100,
            cuisine: "Indian",
            rating: 4.1,
            image: "https://i.ytimg.com/vi/Do7ZdUodDdw/maxresdefault.jpg",
            category: "biryani"
        },
        {
            id: 23,
            name: "Hyderabadi Biryani",
            price: 150,
            cuisine: "Indian",
            rating: 4.1,
            image: "https://t3.ftcdn.net/jpg/08/68/09/42/360_F_868094245_7nBKTvgSsqrpBumA7JtJDDwO5FzX2inD.jpg",
            category: "biryani"
        },
        {
            id: 24,
            name: "Veg Fried Rice",
            price: 100,
            cuisine: "Chinese",
            rating: 3.9,
            image: "https://as2.ftcdn.net/v2/jpg/06/09/35/79/1000_F_609357995_9f5MTF73kiu6UYAtpJZRT9BFWet4l3fX.jpg",
            category: "veg food"
        },
        {
            id: 25,
            name: "Paneer Biryani",
            price: 150,
            cuisine: "Indian",
            rating: 4.0,
            image: "https://cdn.uengage.io/uploads/23764/image-4555-1701085766.jpg",
            category: "biryani"
        },
        {
            id: 26,
            name: "Traditional Thali",
            price: 100,
            cuisine: "Indian",
            rating: 4.1,
            image: "https://t3.ftcdn.net/jpg/07/46/18/34/240_F_746183403_f9XB8NMef8so3DQwjEVifeuBTUNPq2vZ.jpg",
            category: "veg food"
        },
        {
            id: 27,
            name: "Chili garlic noodles",
            price: 100,
            cuisine: "Indian",
            rating: 3.9,
            image: "https://hot-thai-kitchen.com/wp-content/uploads/2021/11/chili-garlic-noodles-blog.jpg",
            category: "snacks"
        },
        {
            id: 28,
            name: "Chocolate ice cream",
            price: 150,
            cuisine: "Indian",
            rating: 4.0,
            image: "https://5.imimg.com/data5/PI/FT/MY-9134447/chocolate-ice-cream-1000x1000.jpg",
            category: "icecream"
        },
        {
            id: 29,
            name: "Mutton Biryani",
            price: 250,
            cuisine: "Indian",
            rating: 4.3,
            image: "https://5.imimg.com/data5/LR/XD/DQ/ANDROID-96310153/images-jpeg-500x500.jpeg",
            category: "biryani"
        },
        {
            id: 30,
            name: "Pudina Panipuri",
            price: 100,
            cuisine: "Indian",
            rating: 3.9,
            image: "https://thumbs.dreamstime.com/b/pani-puri-isolated-white-background-pani-puri-isolated-white-background-361598748.jpg?w=768",
            category: "snacks"
        },
        {
            id: 31,
            name: "Echoing Ajmeri Kalakand",
            price: 300,
            cuisine: "Indian",
            rating: 4.3,
            image: "https://agrasweetsbanjara.com/cdn/shop/files/Ajmeri-Kalakand-edited_2.jpg?v=1731670923",
            category: "sweets"
        }
    ];

    return (
        <div>

        </div>
    );
}


export default RestaurantData;