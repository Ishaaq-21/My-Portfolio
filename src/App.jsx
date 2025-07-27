import Header from "./components/Header/Header";

import TargetCursor from "./blocks/Animated UI compo/TargetCursor/TargetCursor";

import AnimateSectionOnScroll from "./ScrollAnimationContainer";
import { useEffect, useState } from "react";
function App() {
  const [mobileScreen, setMobileScreen] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 768) setMobileScreen(true);
    else setMobileScreen(false);
  }, []);

  return (
    <>
      {/* the target cursor has no effect in mobile screens since they work with touch, so I render the component only in pc's and large screens */}
      {!mobileScreen && (
        <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      )}
      <Header></Header>
      <AnimateSectionOnScroll />
    </>
  );
}

export default App;
