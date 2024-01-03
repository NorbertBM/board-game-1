import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Nav from "./components/nav";

import Home from "./routes/home";
import About from "./routes/about";
import Dashboard from "./routes/dashboard";
export default function App() {
  // responsive
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width:600px)").matches
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width:600px)").matches);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
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

function Layout() {
  return (
    <div>
      <Nav />
      <hr />
      <h1>
        Welcome to <span className="game-name">"Oneiros"</span> Board Game
      </h1>
      {/* createa a hover over the word "Oneiros" when the user howers over the word a popup will apear with the descriptuon of the word  */}

      <p>Oneiros is a Greek word meaning "dream".</p>
      <p>In Greek mythology, Oneiros was the personification of dreams.</p>
      <img
        className="oneiros-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/James_Heath_-_Nestor_Appearing_in_a_Dream_to_Agamemnon%2C_1805.jpg/440px-James_Heath_-_Nestor_Appearing_in_a_Dream_to_Agamemnon%2C_1805.jpg"
        alt=""
      />
      <Outlet />
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
