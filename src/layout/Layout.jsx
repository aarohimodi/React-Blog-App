import React, { useState } from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout({ children }) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <Outlet context={{ search, setSearch }} />
      <Footer />
    </div>
  );
}

export default Layout;
