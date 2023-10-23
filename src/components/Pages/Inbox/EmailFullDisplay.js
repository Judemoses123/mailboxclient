import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import deleteEmailAsync from "../../../Store/AsyncThunks/deleteEmailAsync";

const EmailFullDisplay = () => {
  const { mailId } = useParams();
  console.log("mailID> ", mailId);
  const received = useSelector((state) => state.email.received);
  console.log("recieved> ", received);
  const email = received.find((mail) => mail.id == mailId);
  console.log("email> ", email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteHandler = async () => {
    console.log(mailId);
    const response = await dispatch(deleteEmailAsync(mailId));
    if (response.payload.status == "success") {
      navigate("/inbox");
    }
  };

  return (
    <>
      <Card style={{ minHeight: "100vh" }}>
        {!!email && <Card.Header>{email.subject}</Card.Header>}
        <Card.Body>
          <Card.Title>{!!email && <span>{email.sender}</span>}</Card.Title>
          <br />
          {!!email && <p>{email.text}</p>}
        </Card.Body>
        <Card.Footer
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link to="/inbox" style={{ color: "white" }}>
            <Button>Inbox</Button>
          </Link>
          <Button onClick={deleteHandler} variant="danger">
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
export default EmailFullDisplay;
