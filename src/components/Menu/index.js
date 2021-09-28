import { AppBar, MenuItem, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function Menu() {
  const history = useHistory();
  const sendTo = (path) => {
    history.push(path);
  };
  return (
    <AppBar>
      <Toolbar>
        <MenuItem onClick={() => sendTo("/")}>Home</MenuItem>
        <MenuItem onClick={() => sendTo("/login")}>Login</MenuItem>
        <MenuItem onClick={() => sendTo("/register")}>Register</MenuItem>
        <MenuItem onClick={() => sendTo("/profile")}>Profile</MenuItem>
      </Toolbar>
    </AppBar>
  );
}
export default Menu;
