import styled from "styled-components";

export const EnemyCardStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap");

  &.enemy-card {
    font-family: "Philosopher", sans-serif;
    color: #fae9dd;
    width: 63.5mm;
    height: 88mm;
    &.flip {
      transform: rotateY(180deg);
    }
    &-mini {
      width: 41mm;
      height: 63mm;
    }
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
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 20px 20px 2px rgba(0, 0, 0, 0.2);
    }

    .description {
      margin: auto;
      font-size: 0.88rem;
      color: #ddd;
      padding: 0 10px;
    }
  }
  .enemy-card-header {
    width: 100%;
    height: 18mm;
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;

    .card-name {
      text-transform: uppercase;
      font-size: 1.1rem;
      font-weight: 600;
      text-shadow: 0 0 15px rgb(163, 11, 11);
    }
    .enemy-lvl,
    .icon-right {
      height: 12mm;
      width: 12mm;
      background-color: #fae9dd;
      /* Create a gradiant inwords  */
      background: rgb(250, 233, 221);
      background: radial-gradient(
        circle,
        rgb(247, 237, 230) 0%,
        rgba(181, 163, 151, 1) 100%
      );
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .enemy-lvl {
      margin-left: 10px;
    }
    .icon-right {
      margin-right: 10px;
    }
    .card-name {
      /* background-color: #296a2d; */
      padding: 5px 10px;
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8);
      border-radius: 5px;
      &.exploration {
        background-color: #1267ac;
      }
    }
    .attack {
      text-shadow: 0 0 15px rgb(163, 11, 11);
    }
  }
  .enemy-details-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    height: 50mm;
    .enemy-img {
      width: 40mm;
      height: 40mm;

      object-fit: cover;
      border-radius: 10px;
      /* With or withoud borders */
      border: 2px solid #5e534e;
    }
    .enemy-details {
      display: flex;
      flex-direction: column;
      /* justify-content: space-around; */
      gap: 15px;
      .defense,
      .body,
      .attack,
      .range,
      .speed {
        position: relative;
        margin-left: 10px;
        height: 12mm;
        width: 15mm;
        background-color: #fae9dd;
        /* Create a gradiant inwords  */
        background: rgb(250, 233, 221);
        background: radial-gradient(
          circle,
          rgb(247, 237, 230) 0%,
          rgba(181, 163, 151, 1) 100%
        );
        box-shadow: inset 0 0 20px rgba(0, 0, 0, 1);
        /* opacity: 0.7; */
        /* border-radius: 50%; */
        border-radius: 10%;
        border: 1px solid #111;
        display: flex;
        justify-content: center;
        align-items: center;

        /* font-size: 1.5rem; */

        .value {
          /* position: absolute; */
          /* top: 5px; */
          font-size: 1.5rem;
          /* color: #f5a267; */
          color: #000;
          font-weight: bolder;
          text-shadow: 2px 2px 3px #f0ebe7;
          border-left: 1px solid #111;
          padding-left: 2px;
        }
      }
    }
  }
  .abilities {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    align-content: center;
    gap: 5px;
  }
  .ability_1,
  .ability_2,
  .spell {
    position: relative;
    height: 20mm;
    width: 12mm;
    /* background-color: #fae9dd;
  background: rgb(250, 233, 221);
  background: radial-gradient(
    circle,
    rgb(247, 237, 230) 0%,
    rgba(181, 163, 151, 1) 100%
  ); */
    border: 1px solid #c5bcb6;
    background-color: #000;
    box-shadow: inset 0 0 10px rgb(144, 139, 139);
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    font-size: 1.8rem;
    color: #f5a267;
  }

  .ability_1 {
    /* background: radial-gradient(
    circle,
    rgb(246, 169, 114) 0%,
    rgb(149, 68, 14) 100%
  ); */
    /* box-shadow: inset 0 0 20px rgba(149, 68, 14, 1); */
    border-bottom: 3px solid rgb(149, 68, 14);
  }

  .ability_2 {
    /* background: radial-gradient(
    circle,
    rgb(246, 169, 114) 0%,
    rgb(149, 135, 14) 100%
  ); */
    /* box-shadow: inset 0 0 20px rgba(149, 135, 14, 1); */
    border-bottom: 3px solid rgb(149, 135, 14);
  }
  .spell {
    /* box-shadow: inset 0 0 20px rgba(114, 237, 246, 1); */
    border-bottom: 3px solid rgb(68, 108, 208);

    /* border: 3px solid rgb(14, 52, 149); */
    /* background: linear-gradient(rgb(114, 237, 246) 0%, rgb(14, 52, 149) 100%); */
  }
`;

export const EnemyCardPrint = ` 

& .enemy-card {
  font-family: "Philosopher", sans-serif;
  color: #fae9dd;
  width: 63.5mm;
  height: 88mm;
  &.flip {
    transform: rotateY(180deg);
  }
  &-mini {
    width: 41mm;
    height: 63mm;
  }
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
 
  .description {
    margin: auto;
    font-size: 0.88rem;
    color: #ddd;
    padding: 0 10px;
  }
  .enemy-card-header {
    width: 100%;
    height: 18mm;
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
  
    .card-name {
      text-transform: uppercase;
      font-size: 1.1rem;
      font-weight: 600;
      text-shadow: 0 0 15px rgb(163, 11, 11);
    }
    .enemy-lvl,
    .icon-right {
      height: 12mm;
      width: 12mm;
      background-color: #fae9dd;
      /* Create a gradiant inwords  */
      background: rgb(250, 233, 221);
      background: radial-gradient(
        circle,
        rgb(247, 237, 230) 0%,
        rgba(181, 163, 151, 1) 100%
      );
      box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .enemy-lvl {
      margin-left: 10px;
    }
    .icon-right {
      margin-right: 10px;
    }
    .card-name {
      /* background-color: #296a2d; */
      padding: 5px 10px;
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.8);
      border-radius: 5px;
      &.exploration {
        background-color: #1267ac;
      }
    }
    .attack {
      text-shadow: 0 0 15px rgb(163, 11, 11);
    }
  }
  .enemy-details-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    height: 50mm;
    .enemy-img {
      width: 40mm;
      height: 40mm;
  
      object-fit: cover;
      border-radius: 10px;
      /* With or withoud borders */
      border: 2px solid #5e534e;
    }
    .enemy-details {
      display: flex;
      flex-direction: column;
      /* justify-content: space-around; */
      gap: 15px;
      .defense,
      .body,
      .attack,
      .range,
      .speed {
        position: relative;
        margin-left: 10px;
        height: 12mm;
        width: 15mm;
        background-color: #fae9dd;
        /* Create a gradiant inwords  */
        background: rgb(250, 233, 221);
        background: radial-gradient(
          circle,
          rgb(247, 237, 230) 0%,
          rgba(181, 163, 151, 1) 100%
        );
        box-shadow: inset 0 0 20px rgba(0, 0, 0, 1);
        /* opacity: 0.7; */
        /* border-radius: 50%; */
        border-radius: 10%;
        border: 1px solid #111;
        display: flex;
        justify-content: center;
        align-items: center;
  
        /* font-size: 1.5rem; */
  
        .value {
          /* position: absolute; */
          /* top: 5px; */
          font-size: 1.5rem;
          /* color: #f5a267; */
          color: #000;
          font-weight: bolder;
          text-shadow: 2px 2px 3px #f0ebe7;
          border-left: 1px solid #111;
          padding-left: 2px;
        }
      }
    }
  }
  .abilities {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    align-content: center;
    gap: 5px;
  }
  .ability_1,
  .ability_2,
  .spell {
    position: relative;
    height: 20mm;
    width: 12mm;
    /* background-color: #fae9dd;
  background: rgb(250, 233, 221);
  background: radial-gradient(
    circle,
    rgb(247, 237, 230) 0%,
    rgba(181, 163, 151, 1) 100%
  ); */
    border: 1px solid #c5bcb6;
    background-color: #000;
    box-shadow: inset 0 0 10px rgb(144, 139, 139);
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    font-size: 1.8rem;
    color: #f5a267;
  }
  
  .ability_1 {
    /* background: radial-gradient(
    circle,
    rgb(246, 169, 114) 0%,
    rgb(149, 68, 14) 100%
  ); */
    /* box-shadow: inset 0 0 20px rgba(149, 68, 14, 1); */
    border-bottom: 3px solid rgb(149, 68, 14);
  }
  
  .ability_2 {
    /* background: radial-gradient(
    circle,
    rgb(246, 169, 114) 0%,
    rgb(149, 135, 14) 100%
  ); */
    /* box-shadow: inset 0 0 20px rgba(149, 135, 14, 1); */
    border-bottom: 3px solid rgb(149, 135, 14);
  }
  .spell {
    /* box-shadow: inset 0 0 20px rgba(114, 237, 246, 1); */
    border-bottom: 3px solid rgb(68, 108, 208);
  
    /* border: 3px solid rgb(14, 52, 149); */
    /* background: linear-gradient(rgb(114, 237, 246) 0%, rgb(14, 52, 149) 100%); */
  }
}

`;