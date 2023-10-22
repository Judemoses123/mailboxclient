import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import signupAsync from "../../Store/AsyncThunks/signupAsync";
import loginAsync from "../../Store/AsyncThunks/loginAsync";
import { useNavigate } from "react-router";
const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const [alert, setAlert] = useState("");
  const [loginMode, setLoginMode] = useState(true);
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const submitObject = {
      email: enteredEmail,
      password: enteredPassword,
    };

    if (!loginMode) {
      const enteredConfirmPassword = confirmPasswordInputRef.current.value;
      if (
        String(enteredEmail).trim() === "" ||
        String(enteredPassword).trim() === "" ||
        String(enteredConfirmPassword).trim() === ""
      ) {
        setAlert("Please fill all fields!");
        return;
      } else if (
        String(enteredPassword).trim() !== String(enteredConfirmPassword).trim()
      ) {
        setAlert("Passwords don't match!");
        return;
      }
      const response = await dispatch(signupAsync(submitObject));
      setAlert(response.payload.message);
      if (response.payload.status === "success") {
        navigate('/inbox');
      }
    } else {
      if (
        String(enteredEmail).trim() === "" ||
        String(enteredPassword).trim() === ""
      ) {
        setAlert("Please fill all fields!");
        return;
      }
      const response = await dispatch(loginAsync(submitObject));
      setAlert(response.payload.message);
      if (response.payload.status === "success") {
        navigate('/inbox');
      }
    }
  };
  const toggleMode = () => {
    setLoginMode((prev) => !prev);
  };
  return (
    <Card style={{ width: "18rem", margin: "5rem auto" }}>
      <Card.Body>
        <Card.Title>{loginMode ? "Login" : "Sign Up"}</Card.Title>
        <br />
        <Form style={{ textAlign: "start" }}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control
              type="email"
              placeholder="Email"
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
          {!loginMode && (
            <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                ref={confirmPasswordInputRef}
              />
            </Form.Group>
          )}
          {!!alert && (
            <div style={{ textAlign: "center", color: "salmon" }}> {alert}</div>
          )}
          <Button
            onClick={submitHandler}
            style={{ width: "100%" }}
            variant="primary"
          >
            {loginMode ? "Login" : "Sign Up"}
          </Button>
          <div
            onClick={toggleMode}
            style={{
              textAlign: "center",
              marginTop: "1rem",
              color: "blueviolet",
            }}
          >
            {loginMode
              ? `Don't have an account? Sign up`
              : `Have an account? Login`}{" "}
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AuthForm;
