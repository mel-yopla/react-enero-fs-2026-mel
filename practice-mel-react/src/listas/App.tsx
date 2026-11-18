import Card from "./Card";
import { dataBooks, dataTareas, dataUsers } from "./data";

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
      <h2>Renderizando componentes en Listas</h2>
      <div>
        <ul className="card-list">
          {dataUsers.map((user) => (
            // pasamos cada objeto como props al componente Card
            <Card
              username={user.username}
              name={user.name}
              position={user.position}
              key={user.username}
            ></Card>
          ))}
        </ul>
      </div>
      <h2>Renderizando componentes Libro en Listas</h2>
      <section>
        <h3>My Library</h3>
        <ul className="card-list">
          {dataBooks.map((book) => (
            <div
              key={book.id}
              style={{ marginBottom: "15px", borderBottom: "1px solid #eee" }}
            >
              <p>
                <strong>{book.titulo}</strong>
              </p>
              <p style={{ fontSize: "0.9rem" }}>Author: {book.autor}</p>
            </div>
          ))}
        </ul>
      </section>
    </>
  );
};

export default App;
