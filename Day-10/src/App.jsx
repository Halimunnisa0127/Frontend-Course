import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function App() {
  const initialMovies = [
    {
      title: "Kalki",
      jonor: "Crime/Mystery/Thriller",
      CBFC: "U/A/Hindi",
      seats: 40,
      likes: 9000,
      liked: false,
      booked: false,
      image: "https://media5.bollywoodhungama.in/wp-content/uploads/2024/06/Kalki-2898-AD-10-322x483.jpg"
    },
    {
      title: "Pushpa 2",
      jonor: "Action/Thriller",
      CBFC: "U/A/Telugu",
      seats: 30,
      likes: 6000,
      liked: false,
      booked: false,
      image: "https://static.toiimg.com/photo/msid-115989021/115989021.jpg?433878"
    },
    {
      title: "Salaar",
      jonor: "Action/Thriller",
      CBFC: "A/Telugu",
      seats: 40,
      likes: 4000,
      liked: false,
      booked: false,
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg"
    },
    {
      title: "HIT: The Third Case",
      jonor: "Crime/Mystery/Thriller",
      CBFC: "A/Telugu",
      seats: 40,
      likes: 2500,
      liked: false,
      booked: false,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/HIT_-_The_Third_Case.jpg/250px-HIT_-_The_Third_Case.jpg"
    },
    {
      title: "Subham",
      jonor: "Comedy/Horror",
      CBFC: "U/A/Telugu",
      seats: 20,
      likes: 999,
      liked: false,
      booked: false,
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/subham-et00440249-1747030168.jpg"
    },
    {
      title: "Kesari Chapter 2",
      jonor: "Action/rama/Political",
      CBFC: "A/Hindi",
      seats: 50,
      likes: 2000,
      liked: false,
      booked: false,
      image: "https://assetscdn1.paytm.com/images/cinema/Kesari-2_Poster-470c3d50-0c8a-11f0-9fdc-bd083db259c1.jpg"
    },
    {
      title: "Snow White",
      jonor: "Action/rama/Political",
      CBFC: "U/English",
      seats: 30,
      likes: 4500,
      liked: false,
      booked: false,
      image: "https://assetscdn1.paytm.com/images/cinema/Snow-white4-1cf829d0-032e-11f0-abed-03538c2be683.jpg?format=webp&imwidth=256"
    },
    {
      title: "Final Destination Bloodlines",
      jonor: "Horror/Supernatural/Thriller",
      CBFC: "A/English",
      seats: 40,
      likes: 3000,
      liked: false,
      booked: false,
      image: "https://assetscdn1.paytm.com/images/cinema/FD4-58568940-2f2f-11f0-bd90-d94369f6f4ca.jpg"
    },
    {
      title: "Phule",
      jonor: "Biography",
      CBFC: "U/Hindi",
      seats: 20,
      likes: 2000,
      liked: false,
      booked: false,
      image: "https://assetscdn1.paytm.com/images/cinema/POSTERS_0003_remove%20the%20text%2019-b1fcca60-139e-11f0-8aed-f941662e2d49.jpg"
    },
    {
      title: "Lovely",
      jonor: "Comedy/Fantasy",
      CBFC: "UA+13/Hindi",
      seats: 10,
      likes: 1500,
      liked: false,
      booked: false,
      image: "https://assets.gadgets360cdn.com/pricee/assets/product/202503/Lovely_poster_2_1743155239.jpg"
    },
    {
      title: "Paddington In Peru",
      jonor: "Animation/Advanture/Family/Mystery",
      CBFC: "U/Hindi/English",
      seats: 40,
      likes: 3000,
      liked: false,
      booked: false,
      image: "https://assetscdn1.paytm.com/images/cinema/PADDINGTON-IN-PERU2-25983c20-fb3f-11ef-8434-f9ed39b3241b.jpg"
    }
  ];

  const [movies, setMovies] = useState(initialMovies);

  const bookSeat = (index) => {
    setMovies(prev =>
      prev.map((movie, i) =>
        i === index && movie.seats > 0 && !movie.booked
          ? { ...movie, seats: movie.seats - 1, booked: true }
          : movie
      )
    );
  };

  const toggleLike = (index) => {
    setMovies(prev =>
      prev.map((movie, i) =>
        i === index
          ? {
            ...movie,
            liked: !movie.liked,
            likes: movie.liked ? movie.likes - 1 : movie.likes + 1
          }
          : movie
      )
    );
  };

  const formatLikes = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num;
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {movies.map((movie, index) => (
          <div className="col-md-4 mb-5 " key={index}>
            <div className="card movie-card">
              <img src={movie.image} className="card-img-top" alt={movie.title} height="300px" />
              <div className="card-body moviecards">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.jonor}</p>
                <p className="card-text">CBFC: {movie.CBFC}</p>

                {/* Like Toggle */}
                <div onClick={() => toggleLike(index)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                  {movie.liked ? (
                    <AiFillHeart style={{ color: 'red', fontSize: '25px' }} />
                  ) : (
                    <AiOutlineHeart style={{ fontSize: '25px' }} />
                  )}
                  <span className="ms-2" style={{ fontSize: '14px' }}>{formatLikes(movie.likes)}</span>
                </div>

                <p>Seats: {movie.seats}</p>

                <button
                  className={`btn mb-2 ${movie.seats === 0
                    ? "btn-danger"
                    : movie.booked
                      ? "btn-success"
                      : "btn-warning"
                    }`}
                  onClick={() => bookSeat(index)}
                  disabled={movie.seats === 0 || movie.booked}
                >
                  {movie.seats === 0
                    ? "Sold Out"
                    : movie.booked
                      ? "Booked"
                      : "Book Seat"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
