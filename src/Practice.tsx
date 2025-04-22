interface User {
  name: string;
  age: number;
}

function Practice() {
  const marshal: User = {
    name: "chirag",
    age: 21,
  };

  function chirag(a: number, b: number) {
    return a * b;
  }
  const result = chirag(5, 6);

  const greet = (name: string, address: string): string => {
    return `Hello ${name}, you live in ${address}`;
  };
  const Greetmsg = greet("chirag", "udaipur");
  const arraysPractice: number[] = [1, 2, 3, 4, 5, 6];
  const arraysMix: [string, number, boolean] = ["chirag", 21, false];

  class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    greet(): string {
      return `Hello ${this.name}`;
    }
  }
  const john = new Person("chirag");
  const chiraag = new Person("chirag");

  interface Users {
    name: string;
    age: number;
  }
  interface Admin {
    role: string;
    rank: number;
  }
  type AdminUSer = Users & Admin;

  function AdminDeatails(userName: AdminUSer ,id:string | number) {
    return `Hello ${userName.name} your age is ${userName.age} and your role in ${userName.role} also your rank ${userName.rank} & your ${id}`;

  }
  const userName: AdminUSer = {
    name: "chirag",
    age: 22,
    role: "teamLead",
    rank: 5,
  };
  const AdminsDetals = AdminDeatails(userName ,2556);
  return (
    <div>
      {AdminsDetals}
      <h1>{john.greet()}</h1> {/* Call the greet method */}
      <h1>{chiraag.greet()}</h1> {/* Call the greet method */}
      <h2>{arraysMix.join(", ")}</h2> {/* Format the tuple for display */}
      <h1>{arraysPractice.join(", ")}</h1> {/* Format the array for display */}
      <div>{Greetmsg}</div>
      <div>{marshal.name}</div>
      <div>{result}</div>
      <div>{marshal.age}</div>
    </div>
  );
}

export default Practice;
