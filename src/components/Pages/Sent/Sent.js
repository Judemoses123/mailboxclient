import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomNavbar from "../../Navigation/CustomNavbar";
import EmailDisplay from "../Inbox/EmailDisplay";
import useSent from "../../../Hooks/useSent";

const Sent = (props) => {
  useSent();
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
                type="sent"
              />
            );
          })}
          {sent.length == 0 && (
            <div
              style={{
                width: "50vw",
                height: "50vh",
                backgroundImage:
                  "url(https://static.vecteezy.com/system/resources/previews/028/139/218/original/still-empty-no-email-or-message-yet-concept-illustration-flat-design-eps10-simple-modern-graphic-element-for-landing-page-empty-state-ui-infographic-vector.jpg)",
                backgroundSize: "contain",
                margin: "auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          )}
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
