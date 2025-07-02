import { useState } from "react";
import ChangeName from "./components/ChangeName";

function App() {
  const [userName, setUserName] = useState("")

  const handleInput = e => {
    setUserName(e.target.value)
  }

  return (
    <>
      <h1>State and Props</h1>
      <label htmlFor="userName">Enter you name here: </label>
      <input id="userName" type="text" placeholder="My wonderful name..." onChange={handleInput} />
      <p>Hi there, {userName}</p>
      <p>{userName}, you are doing great today.</p>

      {/* <ChangeName changeName={userName => setUserName(userName)} /> */}
      {/* <ChangeName setUserName={setUserName} /> */}
      <ChangeName userName={userName} setUserName={setUserName} />
    </>  
  );
}

export default App;
