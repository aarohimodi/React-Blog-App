import React from "react";
import AllPosts from "../../components/AllPost/AllPosts";

function AllPost() {
  return (
    <div>
      <div className="w-full bg-gradient-to-r from-green-700 to-green-500 py-10">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="mb-2 text-sm font-medium text-green-100">
            Blog Details
          </p>

          <h1 className="text-2xl font-bold text-white sm:text-4xl">
            All Blogs
          </h1>
        </div>
      </div>
      <AllPosts />
    </div>
  );
}

export default AllPost;
