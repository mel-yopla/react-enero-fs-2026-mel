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
      <hr
        style={{ border: "1px solid gray", width: "100%", margin: "20px 0" }}
      />
      <h2> ACTUALIZAR ESTADOS CON TIPOS DE DATOS PRIMITIVOS</h2>
      <div style={{ margin: "20px" }}>
        <h2>Usando un estado con tipo primitivo : Number</h2>
        <h3>Has hecho click {count} veces</h3>
        <button onClick={handleClick}>Incrementar</button>

        <button onClick={() => setCount(count - 1)}>Decrementar</button>
        <button onClick={() => setCount(0)}>Resetear</button>
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
        ></input>
      </div>

      <hr
        style={{ border: "1px solid gray", width: "100%", margin: "20px 0" }}
      />
    </>
  );
};

export default App;
