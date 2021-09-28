import { useEffect, useState } from "react";
import axios from "axios";
import FormTech from "../../components/FormTech";
import { Redirect } from "react-router-dom";
import "./styles.css";
import { toast } from "react-toastify";
function Profile({
  authenticated,
  setAuthenticated,
  user,
  setUser,
  token,
  action,
  setAction,
}) {
  // const [user, setUser] = useState({});
  // const [tech, setTech] = useState([]);
  // const [token, setToken] = useState(() => {
  //   const localToken = localStorage.getItem("token") || "";
  //   return JSON.parse(localToken);
  // });

  // useEffect(() => {
  //   axios
  //     .get("https://kenziehub.herokuapp.com/profile", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((response) => {
  //       setTech(response.data.techs);
  //       setUser(response.data);
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  useEffect(() => {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${user.id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [action]);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }
  function logout() {
    localStorage.clear();
    setAuthenticated(false);
    setUser("");
    toast.error("Usuário Deslogado");
  }
  function techDel(techId) {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${techId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAction(!action);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <button onClick={logout}>Sair</button>
      {console.log(user.techs)}
      <FormTech setAction={setAction} action={action} token={token} />
      <div>
        {/* <h3>Adicionar Nova Tecnologia</h3>
        <input placeholder="Add tech" />
        <input type="radio" />
        <button>Adicionar</button> */}

        <ul>
          {user.techs === undefined ? (
            <span>não há nada para ver aqui</span>
          ) : (
            user.techs.map((e, i) => (
              <li key={i}>
                {e.title}:{" "}
                <small>
                  <b>{e.status}</b>
                </small>
                <button onClick={() => techDel(e.id)}>remover tech</button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
export default Profile;
