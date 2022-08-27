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
  const imageRef = useRef(null);

  const handleInputChange = (event) => {
    props.setFields({
      ...props.fields,
      [event.target.name]: event.target.value,
    });
  };

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const attemptSave = (event) => {
    const imageRegex = new RegExp('(.png|.jpg|.jpeg|.gif|.bmp)$');
    
    setMessage(""); // clear error message
    setError(false); // reset error state
    event.preventDefault(); // prevent form from submitting
    
    var imageOK = false
    if (props.fields.image === "") { // no image, so no need to check if its a picture
      imageOK = true
    } else if (props.fields.image !== "" && imageRegex.test(props.fields.image)) {
       // if there is a url, check if it ends with .png, .jpg/jpeg, .gif or .bmp
       // this doesn't absolutely ensure that a url points to an image, but it'll prevent most invalid submissions
      imageOK = true
    }
      
    

    if (props.fields.content !== "" && props.fields.content.length <= 250 && imageOK) {
      // ensure content exists and isnt too large, and that the image url is valid
      insertPost(props.fields, currentUser);
      props.toggle(); // close modal
      setMessage("");
    } else {
      
      setError(true);
      if (imageOK) {
        inputRef.current.focus(); // focus on post entry field
        setMessage("Posts must be between 1 and 250 characters");
      } else {
        imageRef.current.focus(); // focus on image entry field
        setMessage("Sorry, your URL is invalid, supported URLs end with one of the following: .jpg | .jpeg | .png | .gif | .bmp");
      }
      
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
            <Form.Label>Image URL (Optional)</Form.Label>
            <Form.Control
              name="image"
              type="text"
              placeholder="example.com/file.jpg"
              value={props.fields.image}
              onChange={handleInputChange}
              ref={imageRef}
            />
            <Form.Text muted className="float-end">
              This must be a direct link to an image.
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
