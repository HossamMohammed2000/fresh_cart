import React, { useContext } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/freshcart-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import toast from "react-hot-toast";
// import { CartContext } from "../../Context/CartContext";
React;
style;
export default function Navbar() {
  // const location = useLocation();
  const { userLogin, setuserLogin } = useContext(UserContext);
  const navigate = useNavigate();
  // let {numberItems} = useContext(CartContext)
  function signout() {
    localStorage.removeItem("userToken");
    setuserLogin(null);
    toast.success("signout successfully");
    navigate("/login");
  }

  return (
    <>
      <nav className="bg-white border-gray-200 fixed top-0 right-0 left-0 z-20">
        <div className="flex flex-wrap justify-center gap-3 lg:justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center gap-5">
            <Link
              to=""
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} width={"120px"} className="h-8" alt="" />
            </Link>

            {userLogin != null ? (
              <>
                <ul className="flex gap-3 ">
                  <li>
                    <Link className="text-slate-600" to="">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-slate-600" to="cart">
                      Cart
                      <div className="absolute top-[-13px] p-1 right-[-13px] bg-emerald-600  text-white size-5 flex items-center justify-center rounded-full"></div>
                    </Link>
                  </li>
                  <li>
                    <Link className="text-slate-600" to="products">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="text-slate-600" to="categories">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link className="text-slate-600" to="brands">
                      Brands
                    </Link>
                  </li>
                  <li>
                    <Link className="text-slate-600" to="">
                      Wish List
                    </Link>
                  </li>
                </ul>
              </>
            ) : null}
          </div>

          <div className="flex items-center justify-between space-x-6 rtl:space-x-reverse">
            <ul className="flex justify-between items-center gap-3">
              <li>
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li>
                <i className="fa-brands fa-tiktok"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin-in"></i>
              </li>
              <i className="fa-brands fa-youtube"></i>
            </ul>

            <div className="flex gap-4">
              {userLogin != null ? (
                <span onClick={signout} className="text-sm cursor-pointer">
                  Signout
                </span>
              ) : (
                <>
                  <Link to="login">Login</Link>
                  <Link to="register">Register</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
