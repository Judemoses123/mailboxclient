import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function CustomNavbar() {
  const email = useSelector((state) => state.auth.email);
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container
          style={{
            margin: "0 !important",
            padding: "0 !important",
            display: "flex",
            justifyContent: "space-between",
            width: "100%  !important",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <NavLink to="/inbox">
              <b
                style={{ fontSize: "1.6rem", color: "black", padding: "1rem" }}
              >
                InboxIQ
              </b>
            </NavLink>
            <Nav className="me-auto">
              <NavLink
                style={{ color: "black", padding: "0 0.5rem" }}
                to="/inbox"
              >
                Inbox
              </NavLink>
              <NavLink
                style={{ color: "black", padding: "0 0.5rem" }}
                to="/sent"
              >
                Sent
              </NavLink>
              <NavLink
                style={{ color: "black", padding: "0 0.5rem" }}
                to="/compose"
              >
                Compose
              </NavLink>
            </Nav>
          </div>
          <span>{email}</span>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
