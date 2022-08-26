import { getPosts } from "../data/PostRepository";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { getUser } from "../data/Repository";
import "./Posts.css";

import PostCreator from "./PostCreator";
import { PlusCircleFill } from "react-bootstrap-icons";

import PostCard from "./PostCard";

function Posts() {
  const currentUser = localStorage.getItem("currentUser");

  const posts = getPosts();

  const [post, setPost] = useState({
    userId: currentUser,
    content: "",
    image: "",
    replyPostIds: [],
    date: "unknown",
    time: "",
  });

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    // toggle the edit state
    // it also clears the field in case the user opens it again
    post.content = "";

    post.image = "";

    setShowModal((current) => !current);
  };
  // return (
  //   <PostList posts={posts}></PostList>
  // )

  return (
    <div>
      <h1>All Posts</h1>
      <div className="d-flex justify-content-center">
        <Button onClick={toggleModal}>
          <PlusCircleFill /> Create a post
        </Button>
      </div>

      <PostCreator
        show={showModal}
        toggle={toggleModal}
        fields={post}
        setFields={setPost}
      />

      {Object.keys(posts).map((id) => {
        const post = posts[id];

        var name = "";

        // deal with some posts not being linked with an existing profile, and provide a placeholder name
        if (post.userId === "[deleted]") {
          name = "[deleted]";
        } else {
          name = getUser(post.userId).name;
        }

        return (
          <PostCard
            key={id}
            name={name}
            content={post.content}
            image={post.image}
            date={post.date}
            time={post.time}
            id={id}
          />
        );
      })}
    </div>
  );
}
export default Posts;
