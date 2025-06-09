import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import MenuCard from '../MenuCard/MenuCard';
import ItemCard from "../ItemCards/ItemCard";


function Home({ onAddToCart }) {
  const navigate = useNavigate();
  const categories = [
    {

      name: "biryani",
      image: "https://i.pinimg.com/736x/67/e7/ff/67e7ff9859d6c9df0c30b897bf901e1d.jpg"
    },

    {
      name: "veg food",
      image: "https://static.vecteezy.com/system/resources/previews/037/920/252/non_2x/ai-generated-an-indian-masala-thali-gudi-padwa-sweets-and-cuisine-concept-photo.jpeg"
    },
    {
      name: "snacks",
      image: "https://clipart-library.com/images_k/food-transparent-background/food-transparent-background-20.png"
    },
    {
      name: "icecream",
      image: "https://c4.wallpaperflare.com/wallpaper/199/555/589/ice-cream-fruit-berries-wallpaper-preview.jpg"
    },
    {
      name: "sweets",
      image: "https://img.freepik.com/premium-photo/brazil-s-famous-chocolate-truffles-brigadeiros_679964-4174.jpg"
    },


  ];
  const itemcard = [
    {
      name: "Hyderabadi Biryani", price:150, cuisine: "Indian", rating: 4.1,
      image: "https://t3.ftcdn.net/jpg/08/68/09/42/360_F_868094245_7nBKTvgSsqrpBumA7JtJDDwO5FzX2inD.jpg",

    },
    {
      name: "Veg Fried Rice", price: 100, cuisine: "Chinese", rating:3.9,
      image: "https://as2.ftcdn.net/v2/jpg/06/09/35/79/1000_F_609357995_9f5MTF73kiu6UYAtpJZRT9BFWet4l3fX.jpg",

    },
    {
      name: "Paneer Biryani", price:150, cuisine: "Indian", rating: 4.0,
      image: "https://cdn.uengage.io/uploads/23764/image-4555-1701085766.jpg",

    },
    {
      name: "Traditional Thali", price: 100, cuisine: "Indian", rating: 4.1,
      image: "https://t3.ftcdn.net/jpg/07/46/18/34/240_F_746183403_f9XB8NMef8so3DQwjEVifeuBTUNPq2vZ.jpg",

    },
    {
      name: "Chili garlic noodles", price:100, cuisine: "Indian", rating: 3.9,
      image: "https://hot-thai-kitchen.com/wp-content/uploads/2021/11/chili-garlic-noodles-blog.jpg",

    },
    {
      name: "Chocolate ice cream", price:150, cuisine: "Indian", rating: 4.0,
      image: "https://5.imimg.com/data5/PI/FT/MY-9134447/chocolate-ice-cream-1000x1000.jpg",

    },
    {
      name: "Mutton Biryani", price:250, cuisine: "Indian", rating: 4.3,
      image: "https://5.imimg.com/data5/LR/XD/DQ/ANDROID-96310153/images-jpeg-500x500.jpeg",

    },
    {
      name: "Pudina Panipuri", price:100, cuisine: "Indian", rating: 3.9,
      image: "https://thumbs.dreamstime.com/b/pani-puri-isolated-white-background-pani-puri-isolated-white-background-361598748.jpg?w=768",

    },
      {
      name: "Echoing Ajmeri Kalakand", price: 300, cuisine: "Indian", rating: 4.3,
      image: "https://agrasweetsbanjara.com/cdn/shop/files/Ajmeri-Kalakand-edited_2.jpg?v=1731670923",

    }
  ];
  const handleImageClick = (category) => {
    navigate(`/restaurantlist/${category}`);
  };

  return (
    <div>
      {/* Welcome Banner */}
      <div
        className="position-relative bg-light text-white rounded-4 overflow-hidden shadow-lg mt-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px"
        }}
      >
        <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <h1 className="display-4 fw-bold mb-3">
            Welcome to <span className="text-warning">Delicious Food</span>
          </h1>
          <p className="lead mb-4">Discover delicious moments, one bite at a time</p>
        </div>
      </div>

      {/* Menu Categories Slider */}
      <h3 className="text-danger ms-5 fw-bold mt-5 mb-3">Hungry? Share Your Order!</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
        }}
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <MenuCard
              image={item.image}
              onClick={() => handleImageClick(item.name)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h3 className="text-danger ms-5 fw-bold mt-5 mb-3">Popular items</h3>
      <div className="container mt-5">
        <div className="row">
          {itemcard.map((item, index) => (
            <div className="col-6 col-lg-3 mb-4 " key={index}>
              <ItemCard
                name={item.name}
                price={item.price}
                image={item.image}
                cuisine={item.cuisine}
                rating={item.rating}
                onAddToCart={() => onAddToCart(item)}
              />
              
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Home;
