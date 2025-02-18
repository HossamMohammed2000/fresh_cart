import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Products from "./components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Categories from "./Components/Categories/Categories";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Notfound from "./Components/Notfound/Notfound";
import UserContextProvider from "./Context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Brands from "./Components/Brands/Brands";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Layout from "./Components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CartContextProvider from "./Context/CartContext";
import { Toaster } from "react-hot-toast";
import Checkout from "./Components/Checkout/Checkout";
import Allorders from "./Components/Allorders/Allorders";
import Wishlist from "./components/Wishlist/Wishlist";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Verifycode from "./components/Verifycode/Verifycode";
import Resetpassword from "./components/Resetpassword/Resetpassword";
QueryClientProvider;
let query = new QueryClient();

let x = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "allorders",
        element: (
          <ProtectedRoute>
            <Allorders />
          </ProtectedRoute>
        ),
      },
      {
        path: "categories",
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: "brands",
        element: (
          <ProtectedRoute>
            <Brands />
          </ProtectedRoute>
        ),
      },
      {
        path: "allorders",
        element: (
          <ProtectedRoute>
            <Allorders />
          </ProtectedRoute>
        ),
      },
      {
        path: "productdetails/:id/:category",
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
      { path: "verifycode", element: <Verifycode /> },
      { path: "resetpassword", element: <Resetpassword /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <UserContextProvider>
        <QueryClientProvider client={query}>
          <CartContextProvider>
            <RouterProvider router={x}></RouterProvider>
            <Toaster />
          </CartContextProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </UserContextProvider>
    </>
  );
}
export default App;
