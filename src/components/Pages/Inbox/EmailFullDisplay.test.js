import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import EmailFullDisplay from "./EmailFullDisplay";
import { fireEvent } from "@testing-library/react";

describe("EmailFullDisplay Component", () => {
  const mockStoreState = {
    email: {
      received: [
        {
          id: "1",
          subject: "Test Subject",
          sender: "test@example.com",
          text: "This is a test email.",
        },
      ],
    },
  };

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
      mailId: "1",
    }),
  }));
  const mockStore = configureStore([]);
  const store = mockStore(mockStoreState);
  it("renders the email details correctly", async () => {
    render(
      <MemoryRouter initialEntries={["/inbox/1"]}>
        <Provider store={store}>
          <Routes>
            <Route path="/inbox/:mailId" element={<EmailFullDisplay />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    await waitFor(() => {
      const subject = screen.getByText("Test Subject");
      const sender = screen.getByText("test@example.com");
      const text = screen.getByText("This is a test email.");

      expect(subject).toBeInTheDocument();
      expect(sender).toBeInTheDocument();
      expect(text).toBeInTheDocument();
    });
  });
  it("navigates to Inbox when the 'Inbox' button is clicked", () => {
    render(
      <MemoryRouter initialEntries={["/inbox/1"]}>
        <Provider store={store}>
          <Routes>
            <Route path="/inbox/:mailId" element={<EmailFullDisplay />} />
          </Routes>
        </Provider>
      </MemoryRouter>
    );

    const inboxButton = screen.getByText("Inbox");
    fireEvent.click(inboxButton);

    
  });
});
