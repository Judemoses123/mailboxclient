import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const EmailFullDisplay = () => {
  const mailId = useParams().mailId;
  const recieved = useSelector((state) => state.email.recieved);
  const email = recieved.find((mail) => {
    return mail.id === mailId;
  });
  return (
    <>
      <Card style={{minHeight:'100vh'}}>
        <Card.Header>{email.subject}</Card.Header>
        <Card.Body>
          <Card.Title>
            <span>{email.sender}</span>
          </Card.Title>
          <br/>
          <span>{email.text}</span>
        </Card.Body>
        <Card.Footer>
            <Button><Link to='/inbox' style={{color:'white'}}>Inbox</Link></Button>
        </Card.Footer>
      </Card>
    </>
  );
};
export default EmailFullDisplay;
