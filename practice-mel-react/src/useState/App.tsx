import { useState } from "react";

const App = () => {
  // 1. Declaración: [valor, funcionActualizadora] = useState(valorInicial)
  // Usando un estado con tipo primitivo : Number
  const [count, setCount] = useState(0);

  // usando un estado primitivo booleano
  const [isToggled, setIsToggled] = useState(false);

  // usando un estado primitivo string
  // Se usa principalmente en formularios (Inputs).
  const [name, setName] = useState("");

  function handleClick() {
    // 2. Actualización: React detectará el cambio y repintará el componente
    setCount(count + 1);
  }
  return (
    <>
      <div style={{ margin: "20px" }}>
        <h2>Usando un estado con tipo primitivo : Number</h2>
        <h3>Has hecho click {count} veces</h3>
        <button onClick={handleClick}>Incrementar</button>
        <button></button>
        <button onClick={() => setCount(count - 1)}>Decrementar</button>
      </div>
      <div style={{ margin: "20px" }}>
        <h2>Usando un estado con tipo primitivo : Boolean</h2>
        <h3>
          El interruptor esta
          <strong>{isToggled ? " ENCENDIDO " : " APAGADO "}</strong>
        </h3>
        <button onClick={() => setIsToggled(!isToggled)}>
          <strong> CAMBIAR ESTADO</strong>
        </button>
      </div>
      <div style={{ margin: "20px" }}>
        <h2>Usando un estado con tipo primitivo : String</h2>
        <h3>
          Hello, my name is :<strong>{name || "____"}</strong>
        </h3>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </>
  );
};

export default App;
