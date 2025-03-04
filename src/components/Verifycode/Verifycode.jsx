import React, { useState } from "react";
import style from "./Verifycode.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/freshcart-logo.svg";
import toast from "react-hot-toast";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
React;
style;
function Verifycode() {
 const navigate = useNavigate();
 const [loading, setLoading] = useState(false);
 async function resetPassword(values) {
  const toastId = toast.loading("Please wait...");
  setLoading(true);
  try {
    const options = {
      url: "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
      method: "PUT",
      data: values,
    };
    const { data } = await axios.request(options);
    if (data.status === "success") {
      setLoading(false);
      navigate("/resetpassword");
      toast.success("Password reset successfully");
    }
  } catch (err) {
    console.log(err);
  } finally {
    toast.dismiss(toastId);
  }
 }
 const formik = useFormik({
  initialValues: {
    code: "",
  },
  validationSchema: Yup.object({
    code: Yup.string().required("Code is required"),
  }),
  onSubmit: (values) => {
    resetPassword(values);
  },
 });

  return (
  <>
  
  <section className=" dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img src={logo} className="h-8" alt="FreshCart Logo" />
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label
                    htmlFor="resetCode"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Reset Code
                  </label>
                  <input
                    type="text"
                    name="resetCode"
                    value={formik.values.resetCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    id="resetCode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="135200"
                    required
                  />
                  {formik.touched.resetCode && formik.errors.resetCode ? (
                    <div
                      className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                      role="alert"
                    >
                      <svg
                        className="shrink-0 inline w-4 h-4 me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      <span className="sr-only">Info</span>
                      <div>
                        <span className="font-medium">Error!</span>{" "}
                        {formik.errors.resetCode}
                      </div>
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
                >
                  {loading ? (
                    <i className="fas fa-circle-notch fa-spin"></i>
                  ) : (
                    "Verify"
                  )}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/Register"
                    className="font-medium text-emerald-600 hover:underline dark:text-emerald-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Verifycode;
