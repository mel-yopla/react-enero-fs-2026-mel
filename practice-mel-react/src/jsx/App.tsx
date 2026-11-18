// import type { FC } from "react";
// Revisar => Para pasar cosas de react como props
import Card from "./Card";

// 1. Definimos el tipo para la tarea
interface Tarea {
  id: number;
  title: string;
  completed: boolean;
}

// 2. Definimos la "forma" de las props
interface AppProps {
  nombre?: string;
  primerApellido?: string;
  segundoApellido?: string;
  children?: React.ReactNode;
}
// / Es mejor usar ReactNode para children

const tareas: Tarea[] = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Build an App", completed: false },
  { id: 3, title: "Master JSX", completed: false },
  { id: 4, title: "Deploy to Vercel", completed: false },
];

//datos para realizar un renderizando de un listado de componentes
interface User {
  username: string;
  name: string;
  position: string;
}

const dataUsers: User[] = [
  { username: "mel-15", name: "Mel", position: "deverloper" },
  {
    username: "alex-22",
    name: "Alex",
    position: "designer",
  },
  { username: "juan-01", name: "Juan", position: "manager" },
];

// 3. Le asignamos la interface al parámetro props
// const App = (props: AppProps) => {
const App = ({
  nombre = "Mel",
  primerApellido = "Yopla",
  segundoApellido,
  children,
}: AppProps) => {
  console.log("props.nombre: ", nombre); // Ahora TS sabe que 'nombre' existe
  console.log("props.primerApellido: ", primerApellido);
  console.log("props.segundoApellido: ", segundoApellido);
  console.log("props.children: ", children);
  console.table(tareas);

  return (
    <div>
      <h1>
        Hola {nombre} {primerApellido}
      </h1>
      <p>{children}</p>
      <p>{segundoApellido ?? "No Enviado el segundo apellido"}</p>

      <h2>Mostrando props enviados por el componente padre</h2>
      <Card
        name="Alex"
        position="Developer"
      ></Card>
      <Card
        name="Carlos"
        position="Designer"
      ></Card>
      <h2>Lista de Tareas pendientes y completadas :</h2>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.title} - {tarea.completed ? "✅ Completado" : "⏳ Pendiente"}
          </li>
        ))}
      </ul>
      <h2>Contador Interactivo :</h2>
      <div>
        <button>Incrementar</button>
        <button>Resetear</button>
        <button>Decrementar</button>
        <p>Contador: 0</p>
      </div>
      <h2>Example Arreglos explicitos en React</h2>
      <div className="array-react">
        {[
          <p key={1}>Parrafo 1</p>,
          <p key={2}>Parrafo 2</p>,
          <p key={3}>Parrafo 3</p>,
        ]}
      </div>
      <h2> El metodo map - Transformación de datos</h2>
      {/* Renderizando un listado de componentes
       */}
      <ul className="card-list">
        {dataUsers.map((user) => {
          return (
            <Card
              key={user.username}
              name={user.name}
              position={user.position}
            ></Card>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
