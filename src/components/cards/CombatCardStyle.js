import styled from "styled-components";

export const CombatCardStyle = styled.div`
  background-color: red;
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
    display: grid;
    grid-template-rows: 1fr 11fr;
    align-items: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  }
  .combat-card_header {
    display: flex;
    justify-content: space-around;
    margin-top: 0.5rem;
  }
  .combat-card_icon-left,
  .combat-card_icon-mid,
  .combat-card_icon-right {
    color: #111;
    height: 10mm;
    width: 10mm;
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
    /* box-shadow: 0 0 1px rgba(0, 0, 0, 1); */
  }
  .action {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2mm;
    align-items: center;
    justify-content: center;
    border: 1px solid #fae9dd;
    margin: 2mm;
    padding: 1.5mm;
    border-radius: 5px;
    /* text-shadow: 2px 10px 30px rgba(0, 0, 0, 1); */
    background: rgb(250, 233, 221);
    background: radial-gradient(
      circle,
      rgb(247, 237, 230) 0%,
      rgba(181, 163, 151, 1) 100%
    );
    box-shadow: inset 0 0 30px rgba(0, 0, 0, 1);
    color: rgb(16, 16, 17);
    .dice {
      border: 1px solid #fae9dd;
      padding: 1px;
      background-color: #eee;
      color: #111;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    }
  }
`;