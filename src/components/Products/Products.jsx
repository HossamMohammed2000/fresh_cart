import React from 'react'
import style from './Products.module.css'
import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
import useProducts from '../../Hooks/useProducts';


React;
style;
function Products() {
  let {data,isError,error,isLoading,isFetching} = useProducts()
  isFetching && console.log("Fetching");
  console.log(data?.data?.data);
  if(isError){
    return <h3>{error.message}</h3>}
    if(isLoading){
      return <div className="spinner"></div>}
    // const [Products, setProducts] = useState([]);
    //   function getProducts(){
    //   axios
    //     .get("https://ecommerce.routemisr.com/api/v1/products")
    //     .then((res) => {
    //       setProducts(res.data.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
    // useEffect(() => {
    //   getProducts()
    // }, []);
    
    
    
    return(
       <>
        <div className="row">
          {data?.data?.data.map((product) => (
        <div  key={product.id} className="w-1/6">
        
        <div className="product p-2 ">
        <Link to={`ProductDetails/${product._id}/${product.category.name}`}>
            <img src={product.imageCover} className="w-full" alt="" />
            <h3 className=" text-emerald-600">{product.category.name}</h3>
            <h3 className="font-semibold mb-1">{product.title.split(" ").slice(0, 2).join(" ")}</h3>
            <div className="flex justify-between p-3">
              <span>{product.price}EGP</span>
              <span><i className="fas fa-star text-yellow-400"></i>{product.ratingsAverage}</span>
            </div>
            </Link>
  
            <button className="btn">Add To Cart</button>
          </div>
       
        </div>
       ))}
      </div>
      </>
    );
  }
export default Products