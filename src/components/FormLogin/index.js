import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Redirect, useHistory } from "react-router";
import { Button, TextField } from "@material-ui/core";
import { toast } from "react-toastify";

function FormLogin({ authenticated, setAuthenticated, setUser, setToken }) {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  let history = useHistory("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        console.log(res);
        toast.success("Logado com Sucesso");
        localStorage.clear();
        localStorage.setItem("token", JSON.stringify(res.data.token));
        setUser(res.data.user);
        setToken(res.data.token);
        history.push("/");
        //essa função faz com que retorne os 2 valores(sucesso e error)
        setAuthenticated(true);
      })
      .catch((err) => toast.error("usuário ou senha incorretos"));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          label="email"
          variant="outlined"
          color="primary"
          margin="normal"
          size="small"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </div>
      <div>
        <TextField
          label="password"
          variant="outlined"
          color="primary"
          margin="normal"
          size="small"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div>
        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </div>
    </form>
  );
}

export default FormLogin;
