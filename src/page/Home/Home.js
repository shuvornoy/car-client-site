import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSite from '../Leftsite/LeftSite';
import ProductCard from '../ProductCard/ProductCard';
import ProductModal from '../ProductCard/ProductModal';
import './Home.css'

const Home = () => {
  const product = useLoaderData();
  const [modal, setModal] = useState(null);
  
    return (
      <div className="flex">
        <div className="siteBar">
          <div>
            <LeftSite />
          </div>
        </div>
        <div>
          <div>
            <div className="grid sm:grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 p-5">
              {product.map((products) => (
                <ProductCard
                  key={products._id}
                  products={products}
                  setModal={setModal}
                ></ProductCard>
              ))}
            </div>
            {modal && (
              <ProductModal modal={modal} setModal={setModal}></ProductModal>
            )}
          </div>
        </div>
        {/* <div className="w-18 h-14">
          <LeftSite />
        </div> */}
      </div>
    );
};

export default Home;