import { Card } from "react-bootstrap";

const EmailDisplay = (props) => {
  return (
    <>
      <Card style={{ margin: "5px 0" }}>
        <Card.Body style={{ display: "flex", justifyContent: "space-between" }}>
          <b>
            <div>{props.sender} : </div>
          </b>
          <div
            style={{
              width: "60%",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textAlign: "end",
            }}
          >
            {props.text}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default EmailDisplay;
