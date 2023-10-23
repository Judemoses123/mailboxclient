import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const EmailFullDisplay = () => {
  const {mailId} = useParams();
  console.log("mailID> ", mailId);
  const received = useSelector((state) => state.email.received);
  console.log("recieved> ", received);
  const email = received.find((mail) => mail.id == mailId);
  console.log("email> ", email);
  return (
    <>
      <Card style={{ minHeight: "100vh" }}>
        <Card.Header>{email.subject}</Card.Header>
        <Card.Body>
          <Card.Title>
            <span>{email.sender}</span>
          </Card.Title>
          <br />
          <p>{email.text}</p>
        </Card.Body>
        <Card.Footer>
          <Button>
            <Link to="/inbox" style={{ color: "white" }}>
              Inbox
            </Link>
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
export default EmailFullDisplay;
