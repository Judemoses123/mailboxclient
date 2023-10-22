import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import signupAsync from "../../Store/AsyncThunks/signupAsync";
function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const [alert, setAlert] = useState("");
  const dispatch = useDispatch();
  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;

    const submitObject = {
      email: enteredEmail,
      password: enteredPassword,
    };

    if (
      String(enteredEmail).trim() === "" ||
      String(enteredPassword).trim() === "" ||
      String(enteredConfirmPassword).trim() === ""
    ) {
      setAlert("Please fill all fields!");
      return;
    }
    else if (
      String(enteredPassword).trim() !== String(enteredConfirmPassword).trim()
    ) {
      setAlert("Passwords don't match!");
      return;
    }
    const response = await dispatch(signupAsync(submitObject));
    setAlert(response.payload.message);

  };

  return (
    <Card style={{ width: "18rem", margin: "5rem auto" }}>
      <Card.Body>
        <Card.Title>Sign Up</Card.Title>
        <br />
        <Form style={{ textAlign: "start" }}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailInputRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordInputRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              ref={confirmPasswordInputRef}
            />
          </Form.Group>
          {!!alert && (
            <div
              style={{ textAlign: "center", width: "100%", color: "salmon" }}
            >
              {" "}
              {alert}
            </div>
          )}
          <Button
            onClick={submitHandler}
            style={{ width: "100%" }}
            variant="primary"
          >
            Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AuthForm;
