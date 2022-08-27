import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Posts.css";
import { PencilSquare } from "react-bootstrap-icons";
import { deletePost } from "../data/PostRepository";
import { getUser } from "../data/Repository";

function PostCard(props) {

  var name = "";

  // deal with some posts not being linked with an existing profile, and provide a placeholder name
  if (props.post.userId === "[deleted]") {
    name = "[deleted]";
  } else {
    name = getUser(props.post.userId).name;
  }

  return (
    <Card>
      <Card.Body>{props.post.content}</Card.Body>
      {props.post.image && ( // only render <hr> and <img> if the post actually has an image
        <Card.Body>
          <hr />
          
          <img variant="bottom" alt="Uploaded by a user" src={props.post.image} />
        </Card.Body>
      )}

      <Card.Footer className="d-flex justify-content-between">
        <div>Posted by: {name}</div>{" "}
        <div>
          <span className="postButton">
            <Button size="sm" disabled variant="info">
              <PencilSquare /> Edit
            </Button>{" "}
            <Button
              size="sm"
              onClick={() => deletePost(props.id)}
              variant="danger"
            >
              Delete
            </Button>
          </span>{" "}
          {props.post.date} | {props.post.time}
        </div>
      </Card.Footer>
    </Card>
  );
}

export default PostCard;
