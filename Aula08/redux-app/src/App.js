import { useSelector } from "react-redux";
import Contador from "./Contador";

function App() {
  const valor = useSelector((state) => state.contador.valor);

  let color = "#FFF";

  if (valor === 10) {
    color = "red";
  }
  
  return (
    <div className="App" style={{ border: `1px solid ${color}` }}>
      <Contador />
    </div>
  );
}

export default App;
