function App() {
  const title = "My React Application";
  const isLogged = false;

  return (
    <header className="main-header">
      <h1>{title.toUpperCase()}</h1>
      <p>User State: {isLogged ? "Conected" : "Guest"}</p>
    </header>
  );
}

export default App;
