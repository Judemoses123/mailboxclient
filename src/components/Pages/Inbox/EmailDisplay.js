import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import readAsync from "../../../Store/AsyncThunks/readAsync";

const EmailDisplay = (props) => {
  const recieved = useSelector((state) => state.email.recieved);
  const dispatch = useDispatch();
  const readHandler = () => {
    dispatch(readAsync(props.id));
  };
  return (
    <Link to={`/inbox/${props.id}`} onClick={readHandler}>
      <Card style={{ margin: "5px 0" }}>
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 2rem",
          }}
        >
          {!props.read && (
            <span
              style={{
                backgroundColor: "cornflowerblue",
                width: "10px",
                height: "10px",
                borderRadius: "100%",
                position: "absolute",
                left: "1rem",
              }}
            />
          )}
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
    </Link>
  );
};
export default EmailDisplay;
