import Form from "react-bootstrap/Form";
import { getPosts, insertPost } from "../data/PostRepository";
import Button from "react-bootstrap/Button";
import { useState } from "react";
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

  const go = () => {
    insertPost(post);
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
      <Form>
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

        <Button onClick={go} variant="success" type="submit">
          post
        </Button>
      </Form>

      
    {Object.keys(posts).map((id) => {
        const post = posts[id];
        const user = getUser(post.userId);
        return (
            <Container>
                <Row>
                    Content: {post.content}
                </Row>
                <Row>
                    <hr />
                    <small>Posted by: {user.name} on: {post.date} at: {post.time}</small>
                </Row>
            </Container>
        )
    })}
        </div>
  );
}
export default Posts;
