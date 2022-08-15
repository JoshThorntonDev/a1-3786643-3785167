import Alert from "react-bootstrap/Alert";
import Collapse from "react-bootstrap/Collapse";

function AnimatedAlert({ variant, message, display, setDisplay }) {
  return (
    <Collapse in={display}>
      <div>
        <Alert variant={variant} onClose={() => setDisplay(false)} dismissible>
          {message}
        </Alert>
      </div>
    </Collapse>
  );
}

export default AnimatedAlert;

// <AnimatedAlert variant="danger" message={message} display={error} setDisplay={setError}/>

// valid values for variant:

// 'primary'
// 'secondary'
// 'success'
// 'danger'
// 'warning'
// 'info'
// 'light'
// 'dark'
// from https://react-bootstrap.github.io/components/alerts/