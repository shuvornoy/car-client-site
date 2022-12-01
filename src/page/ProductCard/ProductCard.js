import React from 'react';
import '../Home/Home.css'

const ProductCard = ({ products, setModal }) => {
  const { name, img, price, Mileage, location, engine, transmission } =
    products;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <div className="mx-auto">
        <img className="w-full rounded-t-lg" src={img} alt="Shoes" />
      </div>
      <div className="card-body">
        <h2 className="text-xl">{name}</h2>
        <div className="lg:grid-cols-2">
          <p className="">Mileage : {Mileage}</p>
          <p className=" ">Location : {location}</p>
          <p className="">Engine: {engine}</p>
          <p className="">Transmission :{transmission}</p>
        </div>
        <div className="flex justify-start md:justify-between buybtn">
          <div>
            <p className="text-xl">Price :{price}$</p>
          </div>
          <div className="mt-1">
            <label
              className="py-1 px-8 rounded-sm text-white"
              onClick={() => setModal(products)}
              htmlFor="my-modal"
              style={{ backgroundColor: "#f87171" }}
            >
              Buy Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;