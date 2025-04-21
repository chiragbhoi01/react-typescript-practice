import Greeting from "./Greeting";

function App() {
  let name: string = "chirag";
  let age: number = 21;

  function chirag(a: number, b: number) {
    console.log(a+b);
        
  }
  chirag(1, 8);
  let arrays : number[] = [1,1,2,7,4]

  return (
    <>
      <h1 className="bg-blue-400">{name}</h1>
      <h2>{age}</h2>
      <h3>{arrays}</h3>
      <Greeting
      name="chiragbhoi"
      hobbies={["video game" , "coding"]}
      address={{city:"udaipur" , state : "rajasthan"}}
      />
    </>
  );
}

export default App;
