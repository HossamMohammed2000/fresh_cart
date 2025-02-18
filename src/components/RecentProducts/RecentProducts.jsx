import  React, {   useState } from "react";
import style from "./RecentProducts.module.css";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import toast from 'react-hot-toast';
React;
style;
function RecentProducts() {
let {data,isError,error,isLoading,isFetching} = useProducts()
let {addProductToCart,setnumberItems,numberItems,} = useContext(CartContext)
const [Loading, setLoading] = useState(false)
const [currentId, setcurrentId] = useState(0)
// const [isInWishlist, setisInWishlist] = useState(false);
// const [imgIsLoading, setimgIsLoading] = useState(true);
 async function addToCart(id){
  setcurrentId(id);
  setLoading(true);
   let response = await addProductToCart(id)
   console.log(response.data);
   if(response.data.message == "success"){
    setnumberItems(numberItems + 1);
    toast.success(response.data.message)
    setLoading(false);
}
else{
  toast.error(response.data.message)
  setLoading(false);
}
}

isFetching && console.log("Fetching");
console.log(data?.data?.data);
if(isError){
  return <h3>{error.message}</h3>}
  if(isLoading){
    return <div className="spinner"></div>}
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
          <button onClick={()=>addToCart(product.id)} className="btn">{Loading && currentId == product.id ?( <i className="fas fa-spinner fa-spin"></i> ): ("Add To Cart")}</button>
        </div>
      </div>
     ))}
    </div>
    </>
  );
}
export default RecentProducts;
