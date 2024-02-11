import styled from "styled-components";

export const DeckCardStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap");
  :root {
    --border-radius: 15px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  font-family: "Philosopher", sans-serif;
  color: #fae9dd;
  width: 63.5mm;
  height: 88mm;

  background: rgb(16, 16, 17);
  background: -moz-linear-gradient(
    90deg,
    rgba(16, 16, 17, 1) 0%,
    rgba(20, 6, 25, 1) 71%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(16, 16, 17, 1) 0%,
    rgba(20, 6, 25, 1) 71%
  );
  background: linear-gradient(
    90deg,
    rgba(16, 16, 17, 1) 0%,
    rgba(20, 6, 25, 1) 71%
  );

  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 20px 10px 2px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  .border {
    position: relative;
    margin: auto auto;
    width: 55mm;
    height: 80mm;
    border-radius: 15px;
    border: 1px solid beige;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  }
  .Behavior .multiplier {
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    color: #fff;
    text-shadow: 0 0 20px rgba(0, 0, 0, 1);
  }
  .icon {
    color: #111;
    height: 20mm;
    width: 20mm;
    background-color: #fae9dd;
    /* Create a gradiant inwords  */
    background: rgb(250, 233, 221);
    background: radial-gradient(
      circle,
      rgb(247, 237, 230) 0%,
      rgba(181, 163, 151, 1) 100%
    );
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
    box-shadow: 0 0 40px rgba(128, 26, 22, 1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* flex-wrap: wrap; */
    /* Add glowing sunlight lines before and after the icon center */
    &::before {
      content: "";
      position: absolute;

      display: inline-block;
      width: 50px;
      left: 15px;
      height: 2px;
      /* create a red orange sunlight ray */

      background: rgb(128, 26, 22);
      background: linear-gradient(
        90deg,
        rgba(231, 209, 85, 1) 0%,
        rgba(128, 26, 22, 1) 51%
      );
      /* background-color: #ccc; */
      vertical-align: middle;
      box-shadow: 0 0 20px rgba(128, 26, 22, 1);
    }
    &::after {
      content: "";
      position: absolute;

      display: inline-block;
      width: 50px;
      height: 2px;
      left: 141px;

      background: rgb(128, 26, 22);
      background: linear-gradient(
        90deg,
        rgba(128, 26, 22, 1) 0%,
        rgba(231, 209, 85, 1) 85%
      );
      /* background-color: #ccc; */
      vertical-align: middle;
      box-shadow: 0 0 20px rgba(128, 26, 22, 1);
    }
  }
`;
