import { useState } from "react";

const App = () => {
  // 1. Declaración: [valor, funcionActualizadora] = useState(valorInicial)
  const [count, setCount] = useState(0);

  function handleClick() {
    // 2. Actualización: React detectará el cambio y repintará el componente
    setCount(count + 1);
  }
  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
};

export default App;
