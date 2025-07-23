// Importing necessary modules from React and axios for HTTP requests
import React, { useState, useEffect } from "react";
import axios from 'axios';


function Home() {

    // State variables
    const [allProducts, setAllProduct] = useState([]);              
    const [filteredProducts, setFilteredProducts] = useState([]);   
    const [selectedCategory, setSelectedCategory] = useState('');   

    // Event handler for dropdown change
    function selectoption(event) {
        console.log("hi", event.target.value);             
        setSelectedCategory(event.target.value);           
        console.log(filteredProducts);                     // Log filtered products (this shows previous state)
    }

    // useEffect to fetch products data once when component mounts
    useEffect(() => {
        const Products = async () => {
            try {
                // Fetch data from fake store API
                const ProductsDetails = await axios.get("https://fakestoreapi.com/products");
                setAllProduct(ProductsDetails.data);       // Store fetched data into allProducts
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        Products(); 
    }, []); // Empty dependency array means it runs once on component mount

    // useEffect to filter products based on selected category
    useEffect(() => {
        if (selectedCategory) {
            // If a category is selected, filter products based on it
            const filteroption = allProducts.filter((detailsitems) => {
                return detailsitems.category === selectedCategory;
            });
            setFilteredProducts(filteroption);  // Set filtered results
        } else {
            // If no category selected, show all products
            setFilteredProducts(allProducts);
        }
    }, [selectedCategory, allProducts]);  // Runs whenever category or product list changes

    // Return JSX to render the component
    return (
        <>
            {/* Dropdown for filtering */}
            <label className="text-danger fs-5">Filter options:</label>
            <select className="form-select mb-5 mt-2" onChange={selectoption}>
                <option value="">All Categories</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>

            {/* Product grid */}
            <div className="container">
                <div className="row">
                    {
                        // Mapping through filtered products
                        filteredProducts.map(products => (
                            <div key={products.id} className="col-6 col-md-4">
                                <div className="card my-3 lh-1">
                                    <img 
                                        src={products.image} 
                                        alt={products.title} 
                                        className="mx-auto d-block mt-4"
                                        style={{ 
                                            width: '190px', 
                                            height: '230px', 
                                            objectFit: 'contain' 
                                        }} 
                                    />
                                    {/* Product details */}
                                    <div className="card-body">
                                        <h5 className="card-title"
                                            style={{
                                                minHeight: "48px",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                            }}>
                                            {products.title}
                                        </h5>
                                        <p className="card-text">Price: ${products.price}</p>
                                        <p className="card-text">
                                            Rating: {products.rating.rate}
                                            <span className="fs-5" style={{ color: "#FFD700" }}>&#9733;</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Home;
