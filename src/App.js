import "./App.css";
import Account from "./components/Pages/Account/Account";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";
import Compose from "./components/Pages/Compose/Compose";
import Inbox from "./components/Pages/Inbox/Inbox";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Account />} />
          <Route path="account" element={<Account />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="inbox" element={<Inbox />} />
            <Route path="compose" element={<Compose />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
