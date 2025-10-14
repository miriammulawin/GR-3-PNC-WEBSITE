import { useState } from "react";

import Header from "./Header.jsx";
import Home from "./Home.jsx";
import MissionVision from "./Mission_Vision.jsx";
import Gallery from "./Gallery.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";
import { Route, Routes } from "react-router-dom";
import Department from "./Department";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mission-vision" element={<MissionVision />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/:department" element={<Department />} />
      </Routes>
    </>
  );
}

export default App;
