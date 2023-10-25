import React, { useEffect, useRef, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getEmailsAsync from "../../../Store/AsyncThunks/getEmailsAsync";
import EmailDisplay from "./EmailDisplay";
import CustomNavbar from "../../Navigation/CustomNavbar";
import useFetch from "../../../Hooks/useFetch";

const Inbox = () => {
  useFetch();

  const received = useSelector((state) => state.email.received);
  const unread = received.reduce((prev, curr) => {
    if (curr.read != true) {
      return Number(prev) + 1;
    } else return Number(prev) + 0;
  }, 0);

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
          Inbox
          <span style={{ fontSize: "1rem !important" }}>Unread: {unread}</span>
        </Card.Header>
        <Card.Body>
          {received.map((item) => {
            return (
              <EmailDisplay
                sender={item.sender}
                recipient={item.recipient}
                subject={item.subject}
                text={item.text}
                read={item.read}
                id={item.id}
                type="received"
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
export default Inbox;
