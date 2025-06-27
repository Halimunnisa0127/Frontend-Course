import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products', err));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Products Page</h1>
      {products.map((product) => (
        <div key={product.id} className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={product.image} style={{ height: '150px', width: '160px' }} className="img-fluid rounded-start" alt={product.title} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <button className='product-price'><strong>₹ {product.price}</strong></button>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
