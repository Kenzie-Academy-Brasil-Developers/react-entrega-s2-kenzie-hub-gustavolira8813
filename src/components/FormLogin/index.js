import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";
import axios from "axios";

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
      <input placeholder="Email" {...register("email")} />
      <input placeholder="Password" {...register("password")} />
      <button type="submit">Sign In</button>
    </form>
  );
}

export default FormLogin;
