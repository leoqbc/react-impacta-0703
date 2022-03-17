import { useEffect, useRef, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  // use ref criamos uma referencia a inputs
  const inputRef = useRef(null);

  // conchetes vazio
  // só executa quando é
  // desenhado o componente
  useEffect(() => {
    // request externo
    // fetch("http://localhost:3000/users")
    //   .then(res => res.json())
    //   .then(clientes => {
    //     setUsers(clientes);
    //   })
    //   .catch((error) => // trata);
    
    // async / await / IIFE
    // (async function () {
    //   // tratativa de erros com async/await
    //   try {
    //     const result = await fetch("http://localhost:3000/users", {
    //       // JWT
    //       // headers: {
    //       //  Authorization: "Bearer" 
    //       // }
    //     });
    //     const users = await result.json();
    //     setUsers(users);
    //   } catch (error) {
    //     // console.log(error);
    //   }
    // })();
    // axios.get("http://localhost:3000/users")
    //   .then(({ data }) => {
    //     setUsers(data);
    //   });

    getUsers();

  }, []);

  const getUsers = async function () {
    const {data} = await axios.get("http://localhost:3000/users");
    setUsers(data);
  };

  const handleSend = () => {
    if (inputRef.current.value === "") {
      return;
    }

    axios.post("http://localhost:3000/users", {
      nome: inputRef.current.value
    })
    .then(() => {
      getUsers();
      inputRef.current.value = "";
    })
    .catch(error => console.log(error));
  };

  const deletar = (id) => {
    axios.delete("http://localhost:3000/users/" + id)
      .then(() => {
        getUsers();
      });
  }

  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={handleSend}>enviar</button>
      <ul>
        {users.map((user) => 
          <li key={user.id}>{user.nome} <button onClick={() => deletar(user.id)}>del</button></li>
        )}
      </ul>
    </div>
  );
}

export default App;
