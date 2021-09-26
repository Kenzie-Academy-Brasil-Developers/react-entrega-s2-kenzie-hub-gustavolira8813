import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/home/login";
import Register from "../pages/register";
import Menu from "../components/Menu";
function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
}
export default Routes;
