import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import ClickSpark from "./blocks/Animated UI compo/ClickSpark/ClickSpark";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
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
        <main className="w-full h-full bg-zinc-100 dark:bg-slate-950 md:pt-[70px]">
          {" "}
          <Home></Home>
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </main>
        <Footer></Footer>
      </ClickSpark>
    </>
  );
}

export default App;
