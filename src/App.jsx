import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Header></Header>
      <main className="w-full h-full">
        {" "}
        <Home></Home>
      </main>
    </>
  );
}

export default App;
