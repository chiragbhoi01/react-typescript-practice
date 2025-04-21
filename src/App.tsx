function App() {
  let name: string = "chirag";
  let age: number = 21;

  function chirag(a: number, b: number) {
    console.log(a+b);
        
  }
  chirag(1, 8);

  return (
    <>
      <h1 className="bg-blue-400">{name}</h1>
      <h2>{age}</h2>
    </>
  );
}

export default App;
