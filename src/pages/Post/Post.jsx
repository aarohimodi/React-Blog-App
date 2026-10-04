import React from "react";
import SinglePost from "../../components/singlePost/SinglePost";
import { useParams } from "react-router-dom";
import Container from "../../conf/container/Container";

function Post() {
  const { slug } = useParams();

  return (
    <div>
      <SinglePost slug={slug} />
    </div>
  );
}

export default Post;
