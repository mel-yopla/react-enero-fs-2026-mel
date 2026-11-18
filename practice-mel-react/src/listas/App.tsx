const App = () => {
  const frutas = ["manzana", "pera", "durazno", "plátano"];

  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
};

export default App;
