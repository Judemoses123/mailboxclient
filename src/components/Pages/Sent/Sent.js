import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import getEmailsAsync from "../../../Store/AsyncThunks/getEmailsAsync";
import CustomNavbar from "../../Navigation/CustomNavbar";
import EmailDisplay from "../Inbox/EmailDisplay";
import getSentEmailAsync from "../../../Store/AsyncThunks/getSentEmailAsync";

const Sent = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSentEmailAsync());
  }, []);
  const sent = useSelector((state) => state.email.sent);
  return (
    <>
      <CustomNavbar />
      <Card style={{ height: "calc(100vh - 3.4rem)" }}>
        <Card.Header
          style={{
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Sent
          <span style={{ fontSize: "1rem !important" }}></span>
        </Card.Header>
        <Card.Body>
          {sent.map((item) => {
            return (
              <EmailDisplay
                sender={item.sender}
                subject={item.subject}
                recipient={item.recipient}
                text={item.text}
                read={item.read}
                id={item.id}
                type='sent'
              />
            );
          })}
        </Card.Body>
        <Card.Footer style={{ display: "flex", justifyContent: "end" }}>
          <Button>
            <Link
              to="/compose"
              style={{ color: "white", textDecoration: "none" }}
            >
              Compose
            </Link>
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
export default Sent;
