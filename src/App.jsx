import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import ClickSpark from "./blocks/Animations/ClickSpark/ClickSpark";
import Portfolio from "./components/Portfolio/Portfolio";
function App() {
  return (
    <>
      <ClickSpark
        sparkColor="#f59e0b"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Header></Header>
        <main className="w-full h-full bg-primary-bg md:pt-[70px]">
          {" "}
          <Home></Home>
          <About />
          <Skills />
          <Portfolio />
        </main>
      </ClickSpark>
    </>
  );
}

export default App;
