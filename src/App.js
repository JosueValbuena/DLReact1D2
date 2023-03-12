import React, { useState } from "react";
import Login from "./components/Login";
import Alert from "./components/Alert";

function App() {

  const [alerta, setAlerta] = useState("");

  return (
    <div className="container w-50">
      <Login setAlerta={setAlerta}/>
      <Alert alerta={alerta}/>
    </div>
  );
}

export default App;
