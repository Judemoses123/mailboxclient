import "./App.css";
import Account from "./components/Pages/Account/Account";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import Compose from "./components/Pages/Compose/Compose";
import Inbox from "./components/Pages/Inbox/Inbox";
import emailFullDisplay from "./components/Pages/Inbox/EmailFullDisplay";
import EmailFullDisplay from "./components/Pages/Inbox/EmailFullDisplay";
import Sent from "./components/Pages/Sent/Sent";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Account />} />
          <Route path="account" element={<Account />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="inbox" element={<Inbox />} />
            <Route path="inbox/:mailId" element={<EmailFullDisplay type='received'/>} />
            <Route path="sent" element={<Sent />} />
            <Route path="sent/:mailId" element={<EmailFullDisplay type='sent'/>} />
            <Route path="compose" element={<Compose />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
