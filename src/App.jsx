import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-4xl bg-green-300 font-bold p-3  ">Employee Description</h1>
    </>
  );
}

export default App;
