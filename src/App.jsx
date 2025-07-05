import {WeddingTimeline} from "./components/Timeline"
import Header from "./components/Header";
import { useState } from "react";
import { HeroSection } from "./components/BookExperience";
import { Invitation } from "./components/Invitation";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-full">
      {/* Fixed Header always on top */}
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* First Section: Canvas and UI */}
      <section className="w-full">
        <HeroSection />
      </section>
      {/* Second Section: Timeline */}
        <WeddingTimeline />
      {/* Invitation */}
      <Invitation />
    </div>
  );
}

export default App;
