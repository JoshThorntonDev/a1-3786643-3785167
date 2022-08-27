import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
import { CheckCircleFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import AnimatedAlert from "./AnimatedAlert";
import { insertPost } from "../data/PostRepository";

function PostCreator(props) {
  const currentUser = localStorage.getItem("currentUser");
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    props.setFields({
      ...props.fields,
      [event.target.name]: event.target.value,
    });
  };

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const attemptSave = (event) => {
    //const imageRegex = new RegExp('(.png|.jpg|.jpeg|.gif|.bmp)$');
    //if (props.fields.image !== "" && imageRegex.test(props.fields.image))

    setMessage(""); // clear error message
    setError(false); // reset error state
    event.preventDefault(); // prevent form from submitting
    if (props.fields.image !== "") {
      console.log("need to impl file type check");
    }

    if (props.fields.content !== "" && props.fields.content.length <= 250) {
      // ensure content is valid
      props.setFields({ ...props.fields, content: "" });
      insertPost(props.fields, currentUser);
      props.toggle(); // close modal
      setMessage("");
    } else {
      setMessage("Sorry, that post is invalid");
      setError(true);
      inputRef.current.focus(); // focus on name entry field
    }
  };

  return (
    <Modal show={props.show} onHide={props.toggle}>
      <Modal.Header closeButton>
        <Modal.Title>New Post</Modal.Title>
      </Modal.Header>
      <AnimatedAlert
        variant="danger"
        message={message}
        display={error}
        setDisplay={setError}
      />
      <Form onSubmit={attemptSave}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Enter text here</Form.Label>
            <Form.Control
              name="content"
              as="textarea"
              rows={6} /* 6 fits all 250 chars in the box at once */
              placeholder="Your thoughts?"
              autoFocus
              maxLength={250}
              value={props.fields.content}
              onChange={handleInputChange}
              required
              ref={inputRef}
            />
            <Form.Text muted className="float-end">
              {props.fields.content.length} / 250
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              name="image"
              type="text"
              placeholder="optional.jpg"
              value={props.fields.image}
              onChange={handleInputChange}
            />
            <Form.Text muted className="float-end">
              This must be a direct link to an image file.
            </Form.Text>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.toggle}>
            Close
          </Button>
          <Button onClick={attemptSave} variant="success" type="submit">
            <CheckCircleFill></CheckCircleFill> Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default PostCreator;
