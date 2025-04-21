type Address = {
    city?: string;
    state?: string;
    pincode?: number;
  };
  
  type FullInformation = {
    name: string;
    age?: number;
    hobbies?: string[];
    address?: Address;
  };
  
  function Greeting({ name, age, hobbies, address }: FullInformation) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">Hello, {name}!</h2>
  
        {age ? <h3>Your age is {age}</h3> : <h3>Your age is not provided</h3>}
  
        <h4 className="mt-2 underline">Your hobbies:</h4>
        {hobbies && hobbies.length > 0 ? (
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index} className="bg-amber-200 text-center my-1">
                {hobby}
              </li>
            ))}
          </ul>
        ) : (
          <p>No hobbies provided</p>
        )}
  
        {address && (
          <div className="mt-4">
            <h4 className="font-semibold">Address:</h4>
            {address.city && <p>City: {address.city}</p>}
            {address.state && <p>State: {address.state}</p>}
            {address.pincode && <p>Pincode: {address.pincode}</p>}
          </div>
        )}
      </div>
    );
  }
  
  export default Greeting;
  