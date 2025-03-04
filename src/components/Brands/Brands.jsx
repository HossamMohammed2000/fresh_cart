import React, { useEffect, useState } from 'react'
import style from './Brands.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
React;
style;
function Brands() {
  const [brands, setBrands] = useState(null);
  const [loading, setLoading] = useState(false);

  function getBrands(){
    setLoading(true)
    axios
    .get(`https://ecommerce.routemisr.com/api/v1/brands`).then((res) => {
      // console.log(res.data.data);
      setBrands(res?.data?.data);
      setLoading(false);
    });
  }
  useEffect(() => {
    getBrands()
  }, []);
  return (
    <>
    {loading ? (
        <div className="flex justify-center items-center mx-auto">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        </div>
      ) : (
        <section className=" py-8 antialiased dark:bg-gray-900 md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:text-3xl mx-auto" >
                Shop by brand
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {brands?.map((brand) => (
                <Link
                  key={brand._id}
                  to={`/brands`}
                  className="flex items-center rounded-lg border p-8 border-gray-200 bg-white px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {brand?.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Brands