import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Menu from "../components/Menu";
import Profile from "../pages/profile";
import { useEffect, useState } from "react";
function Routes() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [action, setAction] = useState(false);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);
  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route>
      <Route path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setUser={setUser}
          token={token}
          setToken={setToken}
        />
      </Route>
      <Route path="/register">
        <Register authenticated={authenticated} />
      </Route>
      <Route path="/profile">
        <Profile
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          setUser={setUser}
          user={user}
          token={token}
          action={action}
          setAction={setAction}
        />
      </Route>
    </Switch>
  );
}
export default Routes;
