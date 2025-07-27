import Header from "./components/Header/Header";

import TargetCursor from "./blocks/Animated UI compo/TargetCursor/TargetCursor";

import AnimateSectionOnScroll from "./ScrollAnimationContainer";
function App() {
  return (
    <>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Header></Header>
      <AnimateSectionOnScroll />
    </>
  );
}

export default App;
