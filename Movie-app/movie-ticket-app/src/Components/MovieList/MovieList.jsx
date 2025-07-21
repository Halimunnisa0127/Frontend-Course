import React, { useState } from "react";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch with Promise
    const fetchMoviesPromise = async () => {
        setLoading(true);
        try {
            const response = await new Promise((resolve) =>
                setTimeout(() => resolve([
                    {
                        id: "m1",
                        title: "Eleven",
                        genre: "Crime/Mystery/Thriller",
                        CBFC: "UA+13/Tamil",
                        likes: 1000,
                        seats: 10,
                        liked: false,
                        image: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/eleven-et00419683-1751436384.jpg"
                    },
                    {
                        id: "m2",
                        title: "Final Destination Bloodlines",
                        genre: "Horror/Supernatural/Thriller",
                        CBFC: "A/English",
                        likes: 4000,
                        seats: 0,
                        liked: false,
                        image: "https://assetscdn1.paytm.com/images/cinema/FD4-58568940-2f2f-11f0-bd90-d94369f6f4ca.jpg"
                    },
                    {
                        id: "m3",
                        title: "Lovely",
                        genre: "Comedy/Fantasy",
                        CBFC: "UA+13/Hindi",
                        seats: 10,
                        likes: 1500,
                        liked: false,
                        image: "https://assets.gadgets360cdn.com/pricee/assets/product/202503/Lovely_poster_2_1743155239.jpg"
                    },
                    {
                        id: "m4",
                        title: "Phule",
                        genre: "Biography",
                        CBFC: "U/Hindi",
                        seats: 0,
                        likes: 3500,
                        liked: false,
                        image: "https://assetscdn1.paytm.com/images/cinema/POSTERS_0003_remove%20the%20text%2019-b1fcca60-139e-11f0-8aed-f941662e2d49.jpg"
                    }
                ]), 1000)
            );
            setMovies(response);
        } 
        catch (error) {
            console.error("Promise error:", error);
        } 
        finally {
            setLoading(false);
        }
    };

    // Fetch with Axios
    const fetchMoviesAxios = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://686277bc96f0cc4e34b9d373.mockapi.io/movie");
            const movieData = response.data.map((post) => ({
                id: post.id,
                title: post.title,
                genre: post.genre,
                CBFC: post.CBFC,
                image: post.image,
                seats: post.seats,
                likes: post.likes || 0,
                liked: post.liked || false
            }));
            setMovies(movieData);
        } catch (error) {
            console.error("Axios error:", error);
        } finally {
            setLoading(false);
        }
    };

    // Like toggle
    const toggleLike = (index) => {
        setMovies((prev) =>
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

    // Format likes (e.g., 1.5K)
    const formatLikes = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
        if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
        return num;
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">🎬 Movie List</h1>
            <div className="mb-5  text-center " >
                <button className="me-3 " onClick={fetchMoviesPromise} disabled={loading}>
                    {loading ? "Loading..." : "Fetch Movies (Promise)"}
                </button>
                <button  onClick={fetchMoviesAxios} disabled={loading} >
                    {loading ? "Loading..." : "Fetch Movies (Axios)"}
                </button>
            </div>


            {movies.length > 0 && (
                <div className="row mt-4">
                    {movies.map((movie, index) => (
                        <div className="col-6 col-md-3 mb-4" key={movie.id}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={movie.image}
                                    className="card-img-top"
                                    alt={movie.title}
                                    style={{ height: "300px" }}
                                />
                                <div className="card-body lh-1">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <h6 className="card-text">{movie.genre}</h6>
                                    <p className="card-text ">CBFC: {movie.CBFC}</p>
                                    <p className="card-text">Seats: {movie.seats || "Not Available"} </p>
                                    <p className="card-text d-flex  gap-2 justify-center">
                                        Likes:
                                        <span onClick={() => toggleLike(index)} style={{ cursor: "pointer" }}>
                                            {movie.liked ? (
                                                <AiFillHeart style={{ color: "red", fontSize: "22px" }} />
                                            ) : (
                                                <AiOutlineHeart style={{ fontSize: "22px" }} />
                                            )}
                                        </span>
                                        <span style={{ fontSize: "14px" }}>{formatLikes(movie.likes)}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MovieList;
