import React, { useState, useEffect } from "react";
import axios from "axios";

function Example5() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetchData("https://dummyjson.com/products");
  }, []);

  const fetchData = async (url) => {
    let result = await axios.get(url);
    console.log(result);
    setProduct(result.data.products);
  };

  return (
    <>
      <div className="row">
        {products.map((e) => {
          return (
            <div className="col-12 col-md-3 col-sm-6 card">
              <img
                src={e.images[0]}
                class="card-img-top mx-auto"
                alt=""
                style={{ height: "200px", width: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{e.brand}</h5>
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">{e.description}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-secondary">add to cart</button>
                <button className="btn btn-primary">BUY NOW</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Example5;

{
  /* <img  src={e.images[0]} alt="" />
                <h1></h1>
                <h3>{e.title}</h3>  className="*/
}
