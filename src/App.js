import "./App.css";

import GlobalStyle from "./styles/global";
import Routes from "./routes";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Routes />
    </>
  );
}

export default App;
