import styled from "styled-components";

export const CharacterPanelStyle = styled.div`
  &.character-panel {
    position: relative;
    width: 183.5mm;
    height: 150mm;
    padding: 5mm;
    border-radius: 15px;
    color: #666;
    font-size: 1.2rem;
    background: rgb(16, 16, 17);
    background: -moz-linear-gradient(
      90deg,
      rgba(0, 0, 5, 1) 10%,
      rgba(20, 6, 25, 1) 71%
    );
    background: -webkit-linear-gradient(
      90deg,
      rgba(0, 0, 5, 1) 10%,
      rgba(20, 6, 25, 1) 71%
    );
    background: linear-gradient(
      90deg,
      rgba(0, 0, 5, 1) 10%,
      rgba(20, 6, 25, 1) 71%
    );
    .character-panel-header {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    .character-profile-pic {
      width: 95mm;
      height: 70mm;
      border: 0.05mm solid black;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: inset 0 0 20px 0px #666;
    }

    .perks {
      width: 120mm;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      /* align-items: center; */
      gap: 5mm;
    }
    .character-spells,
    .character-items,
    .character-abilities {
      display: flex;
      justify-content: space-around;
      width: 100%;
      gap: 5mm;
    }
    .spell,
    .item,
    .ability {
      box-shadow: inset 0 0 15px 0px #666;
      width: 30mm;
      height: 30mm;
      border: 0.05mm solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
    }

    .character-status-info {
      position: absolute;
      top: 75mm;
      display: flex;
      flex-direction: column;
      align-content: center;
      width: 80mm;
    }
    .character-status-info-title {
      color: #ccc;
      font-size: 1.3rem;
      text-transform: uppercase;
      text-align: left;
    }
    .character-status-hp,
    .character-status-mana,
    .character-status-sanity {
      display: flex;
      /* gap: 5mm; */
      width: 100%;
      font-size: 2rem;
      font-weight: bold;
      align-items: center;
      justify-content: start;
    }
    .hp,
    .mana,
    .sanity {
      border-radius: 5px;
      height: 15mm;
      width: 15mm;
    }
    .character-status-hp {
      background-color: #000;

      border-radius: 15px;
      .hp:last-child {
        background-color: #000;
        color: red;
      }
    }
    .character-status-mana {
      .mana:last-child {
        background-color: #000;
        color: blue;
      }
    }
    .character-status-sanity {
      .sanity:last-child {
        background-color: #000;
        color: purple;
      }
    }
  }
`;
