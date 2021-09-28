import FormLogin from "../../components/FormLogin";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

function Login({ authenticated, setAuthenticated, setUser, setToken }) {
  if (authenticated) {
    return <Redirect to="/profile" />;
  }
  return (
    <>
      <h3>Login</h3>
      <FormLogin
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        setUser={setUser}
        setToken={setToken}
      />
      ;
    </>
  );
}

export default Login;
