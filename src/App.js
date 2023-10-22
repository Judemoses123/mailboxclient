import "./App.css";
import Account from "./components/Pages/Account/Account";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Inbox from "./components/Pages/Inbox/Inbox";
import ProtectedRoutes from "./components/Routes/ProtectedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Account />} />
          <Route path="account" element={<Account />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="inbox" element={<Inbox />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
