import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import ClickSpark from "./blocks/Animated UI compo/ClickSpark/ClickSpark";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import ScrollBar from "./components/ScrollBar";
import AnimateSectionOnScroll from "./ScrollAnimationContainer";
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
        <AnimateSectionOnScroll />
      </ClickSpark>
    </>
  );
}

export default App;
