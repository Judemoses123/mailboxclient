import React, { useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Button, Card, CardFooter } from "react-bootstrap";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch, useSelector } from "react-redux";
import sendAsync from "../../../Store/AsyncThunks/sendAsync";
import { Link } from "react-router-dom";
const Compose = () => {
  const dispatch = useDispatch();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const sender = useSelector((state) => state.auth.email);
  const recipientInputRef = useRef();
  const subjectInputRef = useRef();
  const handleSubmit = () => {
    const contentState = editorState.getCurrentContent();
    const text = contentState.getPlainText();
    console.log(text);
    const payload = {
      sender: sender,
      recipient: recipientInputRef.current.value,
      subject: subjectInputRef.current.value,
      text: text,
    };
    dispatch(sendAsync(payload));
  };

  return (
    <>
      <Card style={{ height: "100vh" }}>
        <Card.Header>New Message</Card.Header>
        <Card.Body>
          <form
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <input
              placeholder="Recipient"
              style={{ border: "none", borderBottom: "1px solid #dedede" }}
              ref={recipientInputRef}
            ></input>
            <br />
            <input
              style={{ border: "none", borderBottom: "1px solid #dedede" }}
              placeholder="Subject"
              type="text"
              ref={subjectInputRef}
            ></input>
            <br />
            {/* <Card> */}
            <Editor
              editorState={editorState}
              onEditorStateChange={(newEditorState) =>
                setEditorState(newEditorState)
              }
            />
            {/* </Card> */}
          </form>
        </Card.Body>
        <Card.Footer>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button onClick={handleSubmit}>Send</Button>
            <Button variant="danger">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/inbox"
              >
                Delete
              </Link>
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};
export default Compose;
