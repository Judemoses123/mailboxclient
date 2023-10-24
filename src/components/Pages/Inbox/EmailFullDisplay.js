import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import deleteEmailAsync from "../../../Store/AsyncThunks/deleteEmailAsync";
import CustomNavbar from "../../Navigation/CustomNavbar";

const EmailFullDisplay = (props) => {
  const { mailId } = useParams();

  const sent = useSelector((state) => state.email.sent);
  const received = useSelector((state) => state.email.received);

  const email =
    props.type === "received"
      ? received.find((mail) => mail.id == mailId)
      : sent.find((mail) => mail.id == mailId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteHandler = async () => {
    console.log(mailId);
    const response = await dispatch(deleteEmailAsync(mailId));
    if (response.status == "success") {
      navigate("/inbox");
    }
  };

  return (
    <>
      <CustomNavbar />
      <Card style={{ minHeight: "calc(100vh - 3.5rem)" }}>
        {!!email && <Card.Header>{email.subject}</Card.Header>}
        <Card.Body>
          <Card.Title>{!!email && <span>{email.sender}</span>}</Card.Title>
          <br />
          {!!email && <p>{email.text}</p>}
          {!email && (
            <h1 style={{ width: "100%", textAlign: "center", color: "grey" }}>
              No Emails Found!
            </h1>
          )}
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
