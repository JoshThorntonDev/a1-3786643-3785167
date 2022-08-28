import Carousel from "react-bootstrap/Carousel";
import "./css/Landing.css";

function Landing() {
  return (
    <div className="landing d-flex justify-content-center">
      <Carousel fade="true">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1558959355-d9922ff0b767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Person using computer"
          />
          <Carousel.Caption>
            <h3>Welcome to Loop Agile Now!</h3>
            <p>The place to get things done at Loop Agile</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Team meeting"
          />

          <Carousel.Caption>
            <h3>Collaborate better than ever!</h3>
            <p>Loop Agile Now is built to perform</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Large office"
          />

          <Carousel.Caption>
            <h3>Sign in to get started!</h3>
            <p>We're ready, are you?</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Landing;
