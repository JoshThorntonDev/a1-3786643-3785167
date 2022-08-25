import Form from "react-bootstrap/Form";
import { getPosts, insertPost } from "../data/PostRepository";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { getUser } from "../data/Repository";
function Posts() {
  const currentUser = localStorage.getItem("currentUser");
  const handleInputChange = (event) => {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    insertPost(post, currentUser);
    post.content = "";
  };

  const [post, setPost] = useState({
    userId: currentUser,
    content: "",
    imageUrl: "",
    replyPostIds: [],
    date: "unknown",
    time: ""
  });

  const posts = getPosts();


  

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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
      </Form>

      
    {Object.keys(posts).map((id) => {
        const post = posts[id];
        var name = ""
        if (post.userId === "[deleted]") {
          name = ["[deleted]"]
        } else {
          name = getUser(post.userId).name
        }
        
        return (
            <Container>
                <Row>
                    Content: {post.content}
                </Row>
                <Row>
                    <hr />
                    <small>Posted by: {name} on: {post.date} at: {post.time}</small>
                </Row>
            </Container>
        )
    })}
        </div>
  );
}
export default Posts;
