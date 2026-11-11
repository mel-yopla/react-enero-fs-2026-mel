function App() {
  const title = "My React Application";
  const isLogged = true;

  return (
    <header className="main-header">
      <h1>{title.toUpperCase()}</h1>
      <p>User State: {isLogged ? "Conected" : "Guest"}</p>
      {isLogged && <h2>Welcome User</h2>}
    </header>
  );
}

export default App;
