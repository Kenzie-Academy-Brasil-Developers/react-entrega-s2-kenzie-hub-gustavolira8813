import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
function FormRegister() {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6, "minimo 6").required(),
    name: yup.string().required(),
    bio: yup.string().required(),
    contact: yup.string().required(),
    course_module: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Email" {...register("email")} />
      <input placeholder="Password" {...register("password")} />
      <input placeholder="Name" {...register("name")} />
      <input placeholder="Bio" {...register("bio")} />
      <input placeholder="Contact" {...register("contact")} />
      <input placeholder="Course Module" {...register("course_module")} />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormRegister;
