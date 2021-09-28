import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

function FormTech({ token, setTech, setAction, action }) {
  const schema = yup.object().shape({
    title: yup.string().required("campo obrigatório"),
    status: yup.string().required("campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAction(!action);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          variant="outlined"
          color="primary"
          margin="normal"
          size="small"
          label="informe a tecnologia"
          {...register("title")}
          error={errors.title}
          helperText={errors.title?.message}
        />
      </div>
      {/* <div>
        <TextField label="qual nível" {...register("status")} />
      </div> */}
      <div>
        <input
          type="radio"
          id="iniciante"
          name="choose"
          value="iniciante"
          {...register("status")}
        />
        <label>Iniciante</label>
      </div>
      <div>
        <input
          type="radio"
          id="iniciante"
          name="choose"
          value="Intermediário"
          {...register("status")}
        />
        <label>Intermediário</label>
      </div>
      <div>
        <input
          type="radio"
          id="iniciante"
          name="choose"
          value="Avançado"
          {...register("status")}
        />
        <label>Avançado</label>
        {errors.status?.message && (
          <span>
            <br />
            <small>Selecione o nível</small>
          </span>
        )}
      </div>
      <div>
        <Button type="submit">Add Tech</Button>
      </div>
    </form>
  );
}
export default FormTech;
