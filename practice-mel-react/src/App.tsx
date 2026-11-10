import { useState } from "react";
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import "./App.css";
// import { TextInput } from "./components/TextInput";
// import { TextDisplay } from "./components/TextDisplay";

function App() {
  // const [count, setCount] = useState(0);
  const title = "My React Application";
  const isLogged = false;

  return (
    <header className="main-header">
      <h1>{title.toUpperCase()}</h1>
      <p>User State: {isLogged ? "Conected" : "Guest"}</p>
    </header>

    // <>
    //   <TextInput />
    //   <TextDisplay />
    // </>
  );
}

export default App;
