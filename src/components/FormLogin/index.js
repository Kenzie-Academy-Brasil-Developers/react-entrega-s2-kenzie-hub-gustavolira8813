import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";

function FormLogin() {
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

  function onSubmit(user) {
    console.log({ ...user });
    axios
      .post("https://kenziehub.herokuapp.com/sessions", { ...user })
      .then((res) => {
        console.log(res);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);
        // history.push('/welcome')
      })
      .catch((err) => console.log(err));
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
      <Button type="submit" variant="contained" color="primary">
        Sign In
      </Button>
    </form>
  );
}

export default FormLogin;
