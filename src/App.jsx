import { useEffect, useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Layout from "./layout/Layout";
import AuthProtection from "./components/AuthProtection";
import AllPost from "./pages/allPost/AllPost";
import ContactUs from "./pages/contact/ContactUs";
import About from "./pages/about/About";
// import Post from "./components/post/Post";
import SinglePost from "./components/singlePost/SinglePost";
import AddPost from "./pages/addPost/AddPost";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../src/store/authSlice";
import Post from "./pages/Post/Post";
import EditPost from "./pages/editPost/EditPost";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      const userData = await authService.getCurrentUser();

      if (userData) {
        dispatch(authLogin({ userData }));
      } else {
        console.log("user not found");
      }
    };

    fetchUser();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route
              path="/login"
              element={
                <AuthProtection authentication={false}>
                  <Login />
                </AuthProtection>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthProtection authentication={false}>
                  <Signup />
                </AuthProtection>
              }
            />
            <Route
              path="/add-post"
              element={
                <AuthProtection authentication={true}>
                  <AddPost />
                </AuthProtection>
              }
            />
            <Route path="/post/:slug" element={<Post />} />
            <Route
              path="/edit-post/:id"
              element={
                <AuthProtection authentication={true}>
                  <EditPost />
                </AuthProtection>
              }
            />
            <Route path="/all-post" element={<AllPost />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
