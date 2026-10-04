import React from "react";
import PostForm from "../../components/postForm/PostForm";
import Container from "../../conf/container/Container";

function AddPost() {
  return (
    <div>
      <div className="w-full bg-gradient-to-r from-green-700 to-green-500 py-10">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="mb-2 text-sm font-medium text-green-100">
            Add the new post here
          </p>

          <h1 className="text-2xl font-bold text-white sm:text-4xl">
            Add New Post
          </h1>
        </div>
      </div>
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
