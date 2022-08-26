import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Posts.css";
import { PencilSquare } from "react-bootstrap-icons";
import { deletePost } from "../data/PostRepository";

function PostCard(props) {
  console.log(props);
  return (
    <Card>
      <Card.Body>{props.content}</Card.Body>
      {props.image && ( // only render <hr> and <img> if the post actually has an image
        <Card.Body>
          <hr />
          <img
            variant="bottom"
            alt="Uploaded by a user"
            src={props.image}
          />
        </Card.Body>
      )}

      <Card.Footer className="d-flex justify-content-between">
        <div>Posted by: {props.name}</div>{" "}
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
          {props.date} | {props.time}
        </div>
      </Card.Footer>
    </Card>
  );
}

export default PostCard;
