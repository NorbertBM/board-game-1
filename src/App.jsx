// import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Root from "./routes/root";
import Home from "./routes/home";
import About from "./routes/about";
import Dashboard from "./routes/dashboard";
import Index from "./routes/indexRoute";
export default function App() {
  // responsive
  //   const [isMobile, setIsMobile] = useState(
  //     window.matchMedia("(max-width:600px)").matches
  //   );

  //   useEffect(() => {
  //     window.addEventListener("resize", () => {
  //       setIsMobile(window.matchMedia("(max-width:600px)").matches);
  //     });
  //   }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />}>
          {/* add index rout */}
          <Route index element={<Index />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h3>404 - Not found</h3>
      <Link to="/">Go home</Link>
    </div>
  );
}
