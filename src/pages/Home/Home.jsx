import React, { useState } from "react";
import Banner from "../../components/banner/Banner";
import AllPosts from "../../components/AllPost/AllPosts";

function Home() {
  return (
    <div>
      <Banner />
      <AllPosts />
    </div>
  );
}

export default Home;
