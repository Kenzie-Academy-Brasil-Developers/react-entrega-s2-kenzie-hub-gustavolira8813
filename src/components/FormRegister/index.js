import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
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
      <div>
        <TextField
          label="email"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </div>
      <div>
        <TextField
          label="password"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div>
        <TextField
          label="name"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </div>
      <div>
        <TextField
          label="bio"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("bio")}
          error={!!errors.bio}
          helperText={errors.bio?.message}
        />
      </div>
      <div>
        <TextField
          label="contact"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("contact")}
          error={!!errors.contact}
          helperText={errors.contact?.message}
        />
      </div>
      <div>
        <TextField
          label="course_module"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("course_module")}
          error={!!errors.course_module}
          helperText={errors.course_module?.message}
        />
      </div>
      {/* <input placeholder="Email" {...register("email")} />
      <input placeholder="Password" {...register("password")} />
      <input placeholder="Name" {...register("name")} />
      <input placeholder="Bio" {...register("bio")} />
      <input placeholder="Contact" {...register("contact")} />
      <input placeholder="Course Module" {...register("course_module")} /> */}
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormRegister;
