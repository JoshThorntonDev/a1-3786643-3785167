import Card from "react-bootstrap/Card";
import { getUser } from "../data/Repository";

// non functional
function PostList(posts) {
  return Object.keys(posts).map((key, index) => {
    const post = posts[key];
    console.log(post[index].userId);

    var name = "";

    if (post.userId === "[deleted]") {
      name = "[deleted]";
    } else {
      console.log(post.userId);
      name = getUser(post.userId).name;
    }

    return (
      <Card>
        <Card.Body>{post.content}</Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <span>Posted by: {name}</span>{" "}
          <span>
            {" "}
            {post.date} | {post.time}
          </span>
        </Card.Footer>
      </Card>
    );
  });
}

export default PostList;
