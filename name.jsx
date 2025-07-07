import { useState } from "react";

const Name = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");

  function change(e) {
    setMail(e.target.value);
  }

  return (
    <>
      <input type="text"placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />

      <input type="text"placeholder="Email"onChange={change}/>

      <h1>Hello {name}</h1>
      <h1>Email: {mail}</h1>

      <button onClick={() => setTimeOfDay("Morning")}>Show Morning</button>
      <button onClick={() => setTimeOfDay("Night")}>Show Night</button>

      <h2>{timeOfDay && `Good ${timeOfDay}`}</h2>
    </>
  );
};

export default Name;
