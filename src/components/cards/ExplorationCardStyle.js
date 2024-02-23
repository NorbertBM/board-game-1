import styled from "styled-components";
export const ExplorationCardStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap");

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
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#101011",endColorstr="#140619",GradientType=1);

  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 20px 10px 2px rgba(0, 0, 0, 0.2);

  .card-header {
    height: 18%;
    border-radius: 15px 15px 0 0;
    background-color: inherit;
    margin: 0.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5rem;

    .icon-left,
    .icon-right {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 100%;
      background-color: #fae9dd;

      background: rgb(250, 233, 221);
      background: radial-gradient(
        circle,
        rgb(247, 237, 230) 0%,
        rgba(181, 163, 151, 1) 100%
      );
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);

      border-radius: 50%;
    }
  }

  .exploration {
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  .img-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: center;
    align-items: center;
    .card-img {
      width: 42mm;
      height: 42mm;
      margin: 10px;
      object-fit: cover;
      border-radius: 10px;
      border: 2px solid #5e534e;
    }
  }

  .description {
    margin: auto;
    font-size: 0.88rem;
    color: #ddd;
    padding: 0 10px;
  }
`;
