import { React, useState } from "react";

const Home = () => {
  // let name = "Anushka";

  const [name, setName] = useState("Anushka");
  const [age, Setage] = useState(25);
  const handleClick = () => {
    setName("Vineet");
    Setage(30);
  };

  return (
    <div>
      <h1>Home</h1>
      <p>
        {name} and {age}
      </p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Home;
