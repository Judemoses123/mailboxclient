import logo from "./logo.svg";
import "./App.css";
import CustomNavbar from "./components/Navigation/CustomNavbar";
import AuthForm from "./components/AuthComponents/AuthForm";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <AuthForm />
    </div>
  );
}

export default App;
