import { useState } from "react";
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import "./App.css";
import { TextInput } from "./components/TextInput";
import { TextDisplay } from "./components/TextDisplay";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TextInput />
      <TextDisplay />
    </>
  );
}

export default App;
