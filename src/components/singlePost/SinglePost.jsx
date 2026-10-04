import React, { useContext, useEffect, useState } from "react";
import service from "../../appwrite/config";
import Container from "../../conf/container/Container";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SinglePost({ slug }) {
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadPost, setLoadPost] = useState(true);
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.auth.userData);
  useEffect(() => {
    service
      .getPosts()
      .then((data) => {
        if (data) {
          setPosts(data.rows);
          setLoading(false);
        }
      })
      .catch((err) => setLoading(false));
  }, []);

  useEffect(() => {
    service
      .getPost(slug)
      .then((d) => {
        if (d) {
          setPost(d);

          setLoadPost(false);
        }
      })
      .catch((err) => setLoadPost(false));
  }, [slug]);

  return (
    <>
      <div className="w-full bg-gradient-to-r from-green-700 to-green-500 py-10">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="mb-2 text-sm font-medium text-green-100">
            Blog Details
          </p>

          <h1 className="text-2xl font-bold text-white sm:text-4xl">
            {post?.title}
          </h1>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 py-10">
          <div className="col-span-3 p-3">
            {loadPost ? (
              <p>Loading...</p>
            ) : (
              <div className="p-6 bg-gray-100 rounded-lg">
                <div className="flex justify-between items-center">
                  <h1 className="text-5xl">{post.title}</h1>
                  {user && (
                    <Link to={`/edit-post/${post.$id}`}>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
                        Edit
                      </button>
                    </Link>
                  )}
                </div>

                <div className="h-[400px] my-5">
                  <img
                    src={service.getFileView(post.featuredImage)}
                    className="h-full w-full mx-auto object-cover "
                  />
                </div>
                <p>{post.content}</p>
              </div>
            )}
          </div>
          <div className="col-span-1 p-3">
            {loading ? (
              <p>loading</p>
            ) : (
              <div>
                {posts.map((item) => (
                  <div key={item.$id}>
                    <div className="h-[200px]">
                      <img
                        src={service.getFileView(item.featuredImage)}
                        className="h-full w-full mx-auto object-cover "
                      />
                    </div>

                    <h1 className="py-5">{item.title}</h1>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default SinglePost;
