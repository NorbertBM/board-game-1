import { useState, useEffect } from "react";

import Markdown from "markdown-to-jsx";
import "../css/story.css";
export default function About() {
  let file_name = "story.md";

  const [page, setPage] = useState("");
  useEffect(() => {
    // fetch(file_name)
    //   .then((response) => response.text())
    //   .then((text) => {
    //     setPage(text);
    //   });
    import(`../markdown/${file_name}`).then((response) => {
      fetch(response.default)
        .then((response) => response.text())
        .then((text) => {
          setPage(text);
        });
    });
  }, [file_name]);

  return (
    <div className="page">
      <h2>The story so far</h2>
      <Markdown>{page}</Markdown>
    </div>
  );
}
