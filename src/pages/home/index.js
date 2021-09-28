import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
function Home() {
  const [next, setNext] = useState(1);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios
      .get(`https://kenziehub.herokuapp.com/users?perPage=15&page=${next}`)
      .then((res) => setUserList(res.data))
      .then((res) => console.log(res));
  }, [next]);

  const nextPage = () => {
    setNext(next + 1);
  };
  const backPage = () => {
    setNext(next - 1);
  };
  return (
    <>
      {console.log(userList)}
      <div>Home</div>
      <h4>Confira nossa base de DEVs</h4>
      <ul className="userList">
        {userList.map((e, i) => (
          <li className="userList_item" key={i}>
            {e.name}
            {e.techs.map((element) => (
              <p>{element.title}</p>
            ))}
          </li>
        ))}
      </ul>
      <button onClick={() => backPage()}> {"<"} </button>
      <button onClick={() => nextPage()}>{">"}</button>
    </>
  );
}
export default Home;
