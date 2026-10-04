import React, { useEffect, useState } from "react";
import services from "../../appwrite/config";
import Container from "../../conf/container/Container";
import PostCard from "../PostCard/PostCard";
import { useOutletContext } from "react-router-dom";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    services
      .getPosts()
      .then((post) => {
        if (post) {
          setPosts(post.rows);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const { search } = useOutletContext();
  const filteredPost = posts.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase()),
  );
  if (posts.length === 0) {
    return (
      <div className="w-full py-8 text-center">
        <Container>{loading ? <h1>Loading</h1> : "No posts"}</Container>
      </div>
    );
  }

  return (
    <div className="w-full py-10 px-5 md:px-0 " id="posts">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filteredPost.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
