import React, { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisabled(true);
  });

  if (loading) return <div>Loading data! Please wait</div>;

  return (
    <div className="load-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className="products">
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button">
        <button disabled={disabled} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disabled ? <p>You Reached 100 Products!</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
