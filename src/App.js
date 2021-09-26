import logo from "./logo.svg";
import "./App.css";
import FormLogin from "./components/FormLogin";
import FormRegister from "./components/FormRegister";
import GlobalStyle from "./styles/global";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
