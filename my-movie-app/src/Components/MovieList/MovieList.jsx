import React, { useEffect, useState } from 'react';
import "../MovieList.css";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showtimes, setShowtimes] = useState({});
    const [openShowtimes, setOpenShowtimes] = useState({});
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");
    const [duration, setDuration] = useState("");



    const generateRandomShowtimes = () => {
        const times = ["9:00 AM", "11:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "6:00 PM", "8:00 PM", "10:00 PM"];
        let randomTimes = [];
        while (randomTimes.length < 3) {
            const rand = times[Math.floor(Math.random() * times.length)];
            if (!randomTimes.includes(rand)) {
                randomTimes.push(rand);
            }
        }
        return randomTimes;
    };

    const loadMovies = () => {
        setLoading(true);
        const sampleMovies = [
            {
                id: 1, title: "The Avengers", rating: "4.7", likes: 110607, liked: false, duration: "2h 23m",
                image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqse_XSnkijWzY_FQrPgTiclx516ebb8npng8GBgTGiUBtJdth"
            },
            {
                id: 2, title: "Mufasa: The Lion King", rating: "4.1", likes: 78000, liked: false, duration: "1h 58m",
                image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRdfnqvVvGy90nPvEI3pKePIF2FDPZIFob06yiWA-xveE9N7pB1"
            },

            {
                id: 3, title: "The Good Dinosaur", rating: "4.3", likes: 66000, liked: false, duration: "1h 33m",
                image: "https://www.diskontobooks.co.za/cdn/shop/products/The_Good_Dinosaur_1400x.jpg?v=1539606025"
            },
            {
                id: 4, title: "Spider-Man", rating: "4.7", likes: 99999, liked: false, duration: "2h 7m",
                image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQpuohw0-Cgxtmdhv6fNeZeCtZIrdNrxT5gMzfq6VhKI1cEJyuP"
            },
            {
                id: 5, title: "Finding Dory", rating: "4.4", likes: 75000, liked: false, duration: "1h 37m",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlnEeXcOElN7UcCzf3Sqhdja7drKTn6GAriZcYroZjBHV-Svw"
            },
            {
                id: 6, title: "Paddington in Peru", rating: "3.7", likes: 50000, liked: false, duration: "1h 45m",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhoZK4G-gGp3Pwfvzro_MckUDC0yCg-zjFbn8ldd2iBJ_itcZ"
            }

        ];

        const defaultShowtimes = {};
        const defaultOpen = {};
        sampleMovies.forEach(movie => {
            defaultShowtimes[movie.id] = generateRandomShowtimes();
            defaultOpen[movie.id] = false;
        });

        setMovies(sampleMovies);
        setShowtimes(defaultShowtimes);
        setOpenShowtimes(defaultOpen);
        setLoading(false);
    };


    const toggleShowtimes = (movieId) => {
        setOpenShowtimes(prev => ({
            ...prev,
            [movieId]: !prev[movieId]
        }));

        if (!showtimes[movieId]) {
            const randomTimes = generateRandomShowtimes();
            setShowtimes(prev => ({
                ...prev,
                [movieId]: randomTimes
            }));
        }
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
        if (num >= 100000) return (num / 100000).toFixed(1).replace(/\.0$/, "") + "L";
        if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
        return num;
    };

    const deleteMovie = (id) => {
        if (!window.confirm("Are you sure you want to delete this movie?")) return;

        setMovies(prev => prev.filter(movie => movie.id !== id));
        setShowtimes(prev => {
            const updated = { ...prev };
            delete updated[id];
            return updated;
        });
        setOpenShowtimes(prev => {
            const updated = { ...prev };
            delete updated[id];
            return updated;
        });
    };

    const addMovie = () => {
        if (
            title.trim() === "" ||
            image.trim() === "" ||
            rating.trim() === "" ||
            duration.trim() === "" ||
            isNaN(rating) ||
            rating < 0 ||
            rating > 5
        ) return;

        const newId = Date.now();
        const newMovie = {
            id: newId,
            title,
            image,
            rating,
            duration,
            likes: Math.floor(Math.random() * 100000),
            liked: false,
        };

        const newTimes = generateRandomShowtimes();

        setMovies(prev => [...prev, newMovie]);
        setShowtimes(prev => ({ ...prev, [newId]: newTimes }));
        setOpenShowtimes(prev => ({ ...prev, [newId]: true }));

        setTitle("");
        setImage("");
        setRating("");
        setDuration("");
    };

    // Load data from localStorage if available
    useEffect(() => {
        const savedMovies = JSON.parse(localStorage.getItem("movies"));
        const savedShowtimes = JSON.parse(localStorage.getItem("showtimes"));


        if (Array.isArray(savedMovies) && savedMovies.length > 0) {
            setMovies(savedMovies);
            setShowtimes(savedShowtimes || {});

        } else {
            loadMovies();
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies));
    }, [movies]);

    useEffect(() => {
        localStorage.setItem("showtimes", JSON.stringify(showtimes));
    }, [showtimes]);



    return (
        <div className='container mt-4'>
            <div className='mb-3'>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter movie title" className='form-control mb-2' />
                <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Enter image URL" className='form-control mb-2' />
                <input value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Enter movie rating (0 to 5)" className='form-control mb-2' />
                <input value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Enter movie duration (e.g. 1h 40m)" className='form-control mb-2' />
                <button onClick={addMovie} className='btn btn-success mb-3'>Add Movie</button>
            </div>

            <h1 className='mb-4'>My Movie List</h1>

            <div className='mb-3'>
                <button onClick={loadMovies} className='btn btn-primary me-2'>
                    {loading ? "Loading..." : "Load Movies"}
                </button>
                <button onClick={() => {
                    if (!window.confirm("Clear all saved movies?")) return;

                    setMovies([]);
                    setShowtimes({});
                    setOpenShowtimes({});
                    localStorage.removeItem("movies");
                    localStorage.removeItem("showtimes");
                    localStorage.removeItem("openShowtimes");
                }} className='btn btn-danger'>Clear List</button>
            </div>

            {movies.length === 0 && <h2 className='text-danger mt-5'>No movies yet</h2>}

            <div className='row'>
                {movies.map((movie, index) => (
                    <div className='col-12 col-md-4 mb-5' key={movie.id}>
                        <div className='card   moviecard h-100 shadow '>
                            <img src={movie.image} alt={movie.title} className='card-img-top' style={{ height: "400px" }} loading="lazy" />
                            <p className="text rating ps-4 fs-6">
                                Rating {movie.rating}/5
                                <span className="text-warning  pe-5 fs-3">&#9733;</span>
                                <span onClick={() => toggleLike(index)} style={{ cursor: "pointer" }}>
                                    {movie.liked ? (
                                        <AiFillLike style={{ color: "green", fontSize: "32px", paddingBottom: "6px" }} />
                                    ) : (
                                        <AiOutlineLike style={{ fontSize: "32px", paddingBottom: "6px" }} />
                                    )}
                                </span>
                                <span className='fs-6'>{formatLikes(movie.likes)} Likes</span>
                            </p>

                            <div className='card-body'>
                                <h2 className='card-title'>{movie.title}</h2>
                                <h5 className='card-text'>Dh: {movie.duration}</h5>
                                <button onClick={() => toggleShowtimes(movie.id)} className='btn btn-info btn-sm me-2'>
                                    {openShowtimes[movie.id] ? "Hide Times" : "Show Times"}
                                </button>
                                {openShowtimes[movie.id] && showtimes[movie.id] && (
                                    <div className='mt-2'>
                                        {showtimes[movie.id].map((time, idx) => (
                                            <p key={idx} className='mb-1'>{time}</p>
                                        ))}
                                    </div>
                                )}
                                <button onClick={() => deleteMovie(movie.id)} className='btn btn-outline-danger btn-sm'>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;
