// import Greeting from "./Greeting";

import TodoList from "./TodoList";

// import Practice from "./Practice";

function App() {
  // let name: string = "Chirag";
  // let age: number = 21;

  // function chirag(a: number, b: number) {
  //   console.log("Total:", a + b);
  // }

  // chirag(1, 8);

  // let arrays: number[] = [1, 1, 2, 7, 4];

  return (
    <>
    <TodoList/>
      {/* <h1 className="bg-blue-400 text-white p-2">{name}</h1>
      <h2>Age: {age}</h2>
      <h3>Numbers: {arrays.join(", ")}</h3>
    <div className="flex justify-center items-center bg-red-100"><Practice/></div> */}
      {/* <Greeting
        name="Chirag Bhoi"
        age={21}
        hobbies={["Video Games", "Coding", "Badminton"]}
        address={{ city: "Udaipur", state: "Rajasthan", pincode: 313001 }}
      /> */}
    </>
  );
}

export default App;
