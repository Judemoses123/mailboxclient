import React, { useEffect, useRef, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getEmailsAsync from "../../../Store/AsyncThunks/getEmailsAsync";
import EmailDisplay from "./EmailDisplay";

const Inbox = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmailsAsync());
  }, []);
  const recieved = useSelector((state) => state.email.recieved);
  const unread = recieved.reduce((prev, curr) => {
    if (curr.read != true) {
      return Number(prev) + 1;
    } else return Number(prev) + 0;
  }, 0);

  return (
    <>
      <Card style={{ minHeight: "100vh" }}>
        <Card.Header
          style={{
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <b>Inbox</b>
          <span>Unread: {unread}</span>
        </Card.Header>
        <Card.Body>
          {recieved.map((item) => {
            return (
              <EmailDisplay
                sender={item.sender}
                subject={item.subject}
                text={item.text}
                read={item.read}
                id={item.id}
              />
            );
          })}
        </Card.Body>
        <Card.Footer>
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
export default Inbox;
