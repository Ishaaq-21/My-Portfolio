import Header from "./components/Header/Header";
import MainSections from "./MainSections";
import TargetCursor from "./blocks/Animated UI compo/TargetCursor/TargetCursor";

import { useEffect, useState } from "react";
import { MobileScreenContext } from "./components/SharedComponents/Context/MobileScreensContext";
function App() {
  const [mobileScreen, setMobileScreen] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 768) setMobileScreen(true);
    else setMobileScreen(false);
  }, []);

  return (
    <MobileScreenContext.Provider value={{ mobileScreen }}>
      {/* the target cursor has no effect in mobile screens since they work with touch, so I render the component only in pc's and large screens */}
      {!mobileScreen && (
        <TargetCursor spinDuration={3} hideDefaultCursor={true} />
      )}
      <Header></Header>
      <MainSections />
    </MobileScreenContext.Provider>
  );
}

export default App;
