import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostForm from "../../components/postForm/PostForm";
import Container from "../../conf/container/Container";
import service from "../../appwrite/config";

function EditPost() {
  const [post, setPost] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    service
      .getPost(id)
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <div className=" bg-[#05A53F] py-8 sm:py-10 mx-auto">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Edit Post
          </h1>

          <p className="mt-2 text-sm text-orange-100">{id}</p>
        </div>
      </div>
      <Container>
        <div className="py-20">
          <PostForm post={post} />
        </div>
      </Container>
    </>
  );
}

export default EditPost;
