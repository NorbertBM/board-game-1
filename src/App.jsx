// import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Root from "./routes/root";
import Home from "./routes/home";
import About from "./routes/about";
import Dashboard from "./routes/dashboard";

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
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
