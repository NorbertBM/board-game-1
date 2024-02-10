import React from "react";
export default function Index() {
  return (
    <>
      <h1>
        Welcome to <span className="game-name">"Oneiros"</span> Board Game
      </h1>

      <p>
        {" "}
        <a
          className="game-name"
          href="https://en.wikipedia.org/wiki/Oneiros"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oneiros{" "}
        </a>{" "}
        is a Greek word meaning "dream".
      </p>
      <p>In Greek mythology, Oneiros was the personification of dreams.</p>
      <img
        className="oneiros-img"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/James_Heath_-_Nestor_Appearing_in_a_Dream_to_Agamemnon%2C_1805.jpg/440px-James_Heath_-_Nestor_Appearing_in_a_Dream_to_Agamemnon%2C_1805.jpg"
        alt=""
      />
    </>
  );
}
