import { dataTareas } from "./data";

const App = () => {
  const frutas = ["manzana", "pera", "durazno", "plátano"];

  return (
    <>
      <h2>Renderizando listas de forma básica</h2>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
      <h2> Renderizando listas de Tareas</h2>
      <div className="tasks-container">
        <ul>
          {dataTareas.map((tarea) => (
            <li key={tarea.id}>
              <strong>{tarea.title}</strong>
              <span>{tarea.completed ? "✅" : "⏳"}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
