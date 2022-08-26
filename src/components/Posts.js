import { getPosts } from "../data/PostRepository";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { getUser } from "../data/Repository";
import "./Posts.css";

import PostCreator from "./PostCreator";
import { PencilSquare, PlusCircleFill } from "react-bootstrap-icons";
import { deletePost } from "../data/PostRepository";

function Posts() {
  const currentUser = localStorage.getItem("currentUser");

  const posts = getPosts();

  const [post, setPost] = useState({
    userId: currentUser,
    content: "",
    image: null,
    replyPostIds: [],
    date: "unknown",
    time: "",
  });

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    // toggle the edit state
    // it also clears the field in case the user opens it again
    post.content = "";

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

      {/* <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>content</Form.Label>
          <Form.Control
            name="content"
            type="text"
            autoFocus
            maxLength={250}
            value={post.content}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          post
        </Button>
      </Form> */}

      {Object.keys(posts).map((id) => {
        const post = posts[id];
        var name = "";
        if (post.userId === "[deleted]") {
          name = ["[deleted]"];
        } else {
          name = getUser(post.userId).name;
        }

        return (
          <Card>
            <Card.Body>{post.content}</Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <div>Posted by: {name}</div>{" "}
              <div>
                <span className="postButton">
                  <Button size="sm" disabled variant="info">
                    <PencilSquare /> Edit
                  </Button>{" "}
                  <Button
                    size="sm"
                    onClick={() => deletePost(id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </span>{" "}
                {post.date} | {post.time}
              </div>
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
}
export default Posts;
