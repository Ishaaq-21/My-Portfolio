import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About";
function App() {
  return (
    <>
      <Header></Header>
      <main className="w-full h-full bg-primary-bg md:pt-[70px]">
        {" "}
        <Home></Home>
        <About />
      </main>
    </>
  );
}

export default App;
